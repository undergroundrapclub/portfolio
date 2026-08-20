export class CodeExecutor {
  static pyodideInstance = null;
  static pyodidePromise = null;

  static async getPyodide() {
    if (window?.pyodide) return window.pyodide;

    if (!window.loadPyodide) {
      throw new Error('Pyodide is not loaded.');
    }

    if (!CodeExecutor.pyodidePromise) {
      CodeExecutor.pyodidePromise = window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/'
      });
    }

    const pyodide = await CodeExecutor.pyodidePromise;
    CodeExecutor.pyodideInstance = pyodide;
    window.pyodide = pyodide;
    return pyodide;
  }

  constructor({ editor, outputElement, execTimeElement, languageSelect, pythonURI, javaURI, fetchOptions = {} } = {}) {
    this.editor = editor;
    this.outputElement = outputElement;
    this.execTimeElement = execTimeElement;
    this.languageSelect = languageSelect;
    this.pythonURI = pythonURI;
    this.javaURI = javaURI;
    this.fetchOptions = fetchOptions;
  }

  async run() {
    const code = this.editor?.getValue?.() || '';
    const lang = this.languageSelect?.value || 'python';
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    if (!outputDiv) {
      throw new Error('CodeExecutor requires an output element');
    }

    outputDiv.textContent = '⏳ Running...';
    if (execTimeSpan) execTimeSpan.textContent = '';

    const startTime = Date.now();
    const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1';

    let runURL;
    if (lang === 'python') runURL = `${this.pythonURI}/run/python`;
    else if (lang === 'java') runURL = `${this.javaURI}/run/java`;
    else if (lang === 'javascript') runURL = `${this.pythonURI}/run/javascript`;
    else throw new Error(`Unsupported language: ${lang}`);

    const body = JSON.stringify({ code });
    const options = { ...this.fetchOptions, method: 'POST', body };

    try {
      const res = await fetch(runURL, options);

      if (!res.ok) {
        const raw = await res.text();
        let message = raw;
        try {
          const parsed = JSON.parse(raw);
          message = parsed.output || parsed.error || raw;
        } catch (e) {
          // ignore parse error, keep raw text
        }
        throw new Error(message || `HTTP ${res.status}`);
      }

      const result = await res.json();
      const output = result.output || '[no output]';

      if (lang === 'javascript' && isLocalhost && output.includes("No such file or directory: 'node'")) {
        throw new Error('Node.js not available on backend');
      }

      outputDiv.textContent = output;
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms`;
      }
    } catch (err) {
      console.warn('Backend execution failed, using browser fallback:', err);

      if (lang === 'python') {
        try {
          await this.runPythonFallback(code, startTime);
        } catch (fallbackErr) {
          outputDiv.textContent = 'Error: ' + fallbackErr.message;
          if (execTimeSpan) execTimeSpan.textContent = '';
        }
      } else if (lang === 'javascript') {
        this.runJavaScriptFallback(code, startTime);
      } else if (lang === 'java') {
        outputDiv.textContent = 'Java cannot run in the browser on GitHub Pages. Use the local backend or a different host.';
        if (execTimeSpan) execTimeSpan.textContent = '';
      } else {
        outputDiv.textContent = 'Error: ' + err.message;
        if (execTimeSpan) execTimeSpan.textContent = '';
      }
    }
  }

  async runPythonFallback(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    try {
      const pyodide = await CodeExecutor.getPyodide();
      const captured = [];
      pyodide.setStdout({ batched: (value) => captured.push(String(value)) });
      pyodide.setStderr({ batched: (value) => captured.push(String(value)) });

      await pyodide.runPythonAsync(code);

      const resultText = captured.join('') || '[no output]';
      outputDiv.textContent = resultText;
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (browser fallback)`;
      }
    } catch (fallbackErr) {
      outputDiv.textContent = 'Error: ' + fallbackErr.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  runJavaScriptFallback(code, startTime) {
    const outputDiv = this.outputElement;
    const execTimeSpan = this.execTimeElement;

    try {
      const logs = [];
      const originalLog = console.log;
      console.log = function(...args) {
        logs.push(args.map(arg => String(arg)).join(' '));
        originalLog.apply(console, args);
      };

      eval(code);
      console.log = originalLog;

      outputDiv.textContent = logs.length > 0 ? logs.join('\n') : '[no output]';
      if (execTimeSpan) {
        execTimeSpan.textContent = `⏱Execution time: ${Date.now() - startTime}ms (local fallback)`;
      }
    } catch (evalErr) {
      outputDiv.textContent = 'Error: ' + evalErr.message;
      if (execTimeSpan) execTimeSpan.textContent = '';
    }
  }

  bindCopyOutput(button) {
    if (!button || !this.outputElement) return;

    button.addEventListener('click', () => {
      const output = this.outputElement.textContent;
      const original = button.textContent;
      navigator.clipboard.writeText(output).then(() => {
        button.textContent = '✔';
        setTimeout(() => {
          button.textContent = original;
        }, 1200);
      });
    });
  }
}

export default CodeExecutor;
