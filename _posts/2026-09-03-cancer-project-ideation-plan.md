---
layout: post
codemirror: true
title: Cancer Website Ideation and Plan 
description: This is our overall idea of our non profit project and how we are going to lay things out and stay efficient with our work for this project!
permalink: /website/plan

---
# Cancer Support Website — Development Plan

## 1. Our Main Goal

Our goal is to turn the website into a **safe, welcoming, and interactive space for kids, teens, and families affected by cancer.**

We want the website to do more than just provide information. Users should be able to:

- Learn about cancer in an age-appropriate way
- Express how they are feeling
- Find activities to take a break
- Interact with the website and other users
- Personalize their experience
- Find support and helpful resources

---

## 2. What We Already Have

We already have some basic interactive features that we can build on.

### Current UI Features

We have experimented with:

- Image-based posts
- Reaction buttons
- A post area
- Interactive UI elements
- Code runners for testing features

For example, our UI currently allows a user to select a reaction and post it.

We also have a **Python code runner** that can take text input and display the user's post.

### Next Step

Instead of creating completely separate features, we want to **build these ideas into the existing website and make them work together.**

---

## 3. Features We Want to Build

We have several ideas, but we don't want to try to build everything at once.

### Priority 1 — Daily Check-In

**Create a daily "How are you feeling?" check-in.**

Users can choose a feeling/reaction and submit it.

Example:

> How are you feeling today?

- 🙂 Good
- 😐 Okay
- 😔 Not great
- 😡 Frustrated

The check-in would reset each day.

**Done when:** A user can select a response and submit it successfully.

---

### Priority 2 — Age/Reading Level

**Create different reading levels for information on the website.**

We want information to be easier to understand depending on who is reading it.

Possible options:

- 🧒 Kids
- 🧑 Teens
- 👨‍👩‍👧 Parents

The same topic could be explained differently depending on the selected level.

**Done when:** A user can choose a reading level and see the appropriate version of the information.

---

### Priority 3 — Fun Activities

**Add simple games and activities.**

We want users to have something enjoyable to do while using the website.

Possible activities:

- Memory game
- Puzzle
- Simple matching game
- Coloring pages

We would start with **one simple game** before trying to add multiple games.

**Done when:** A user can open and play the activity without leaving the website.

---

### Priority 4 — Personalization

**Add simple themes that users can choose from.**

Users could change things like:

- Background
- Icons
- Theme
- Other visual settings

This would make the website feel more personal and comfortable.

**Done when:** A user can select a theme and the website changes to match it.

---

### Priority 5 — Community/Support

**Research a safe way for users to connect with others.**

One idea is a mentor chat, but because users may be younger, we don't want to build a chat system without making sure it is safe.

Before building this, we want to:

1. Research how similar organizations handle online communication.
2. Talk to a nonprofit if possible.
3. Figure out what safety rules would be needed.
4. Decide whether a live chat is actually the best option.

**Done when:** We have a clear and safe plan for how this feature should work.

---

## 4. What We Are Not Going to Do Yet

We have a lot of ideas, but trying to build all of them at once could make the project too complicated.

For now, we will **not** focus on:

- A complicated messaging system
- A large collection of games
- Advanced user accounts
- Complicated animations
- Features that require information we don't have yet

We want to make a few features **work well before adding more.**

---

## 5. Development Plan

### Step 1 — Fix and Organize What We Already Have

First, we will make sure our current UI and code runners work correctly.

We will test:

- Text input
- Image input
- Reactions
- Posting
- UI buttons

This gives us a good foundation for the new features.

---

### Step 2 — Build the Daily Check-In

We will start with the check-in because it is one of the simpler interactive features.

**Plan:**

1. Create the question.
2. Add reaction choices.
3. Allow the user to select one.
4. Add a submit button.
5. Display the result.
6. Make the check-in reset each day.

---

### Step 3 — Add Reading Levels

After the check-in works, we will work on making information easier to understand.

We will start with a **small number of example pages** rather than changing the entire website at once.

---

### Step 4 — Add One Activity

We will create one simple game or coloring activity.

Once that works, we can decide whether it is worth adding more.

---

### Step 5 — Add Personalization

We will create a few simple themes and allow the user to switch between them.

---

### Step 6 — Test Everything

Before considering a feature finished, we will test it ourselves.

We will check:

- Does the button work?
- Does the information display correctly?
- Does it work on different screen sizes?
- Does anything break after using the feature?
- Is it easy to understand?

---

## 6. Team Plan

We want **every task to have one person responsible for it**, while still helping each other when someone gets stuck.

| Person | Main Role |
|---|---|
| **Salma** | Scrum Master / Developer |
| **Isha** | Developer |
| **Aashi** | Developer |
| **Emily** | Developer |

Everyone will have **one task in progress at a time**.

When someone finishes their task, they can move on to the next one.

---

## 7. Our GitHub Board

We will organize our work using three columns:

### TO DO

Features we still need to work on.

### DOING

The feature someone is currently working on.

### DONE

Features that have been completed and tested.

**Rule:** Each person can only have **one task in "Doing" at a time.**

This prevents us from starting too many things and not finishing them.

---

## 8. Nonprofit Research

We also want to make sure we aren't designing the website based only on what **we think** cancer patients and families need.

Our first organization to contact is **Oncology And Kids**, because their work focuses on children, teens, and families affected by cancer.

We want to ask for feedback about:

- What information is most useful?
- What do younger people struggle to understand?
- What kinds of activities or support would be helpful?
- What should we avoid putting on the website?
- What would make the website feel safe and welcoming?

This feedback can help us decide which features should actually be built.

---

## 9. How We Will Know We Are Successful

We will consider the project successful if we have a website where users can:

**Learn → Interact → Take a Break → Feel Supported**

More specifically, we want users to be able to:

- Find information they can understand
- Use the daily check-in
- Interact with activities
- Personalize the website
- Find trustworthy support resources

Our goal isn't to make the website have **the most features**.

Our goal is to make the features we choose **actually useful to the people we are designing for.**

---

## 10. Our First Sprint

Our first sprint will focus on getting our current UI and code runners working reliably, then building the daily check-in.

Once that works, we'll move to reading levels and one simple activity.

We will build and test each feature before moving on to the next one.

### First Sprint Tasks

**To Do**

- Fix/test current code runner
- Test image and text posting
- Design daily check-in
- Build daily check-in
- Test daily check-in

**Then**

- Reading-level information
- One game/activity
- Themes
- Research safe community features
---

## 11. Adjustments

As we work on the website, we want to keep adding more things based on what we think would be fun and useful for users.

For the games part, we don't just want to have normal games that you could find on any kids' website. We want to make them more interesting and connected to computer science.

Some ideas are:

- Let users make their own simple game
- Let users make their own puzzles
- Let users create their own characters
- Let users change how their game works
- Add simple coding challenges
- Let users build their own levels

This way, users aren't just playing games. They can also make their own things and be creative.




