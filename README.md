# LearnPal

A multi-subject learning web app for ages 3 through grown-ups helping with
homework. Subjects include **Math**, **Literature**, **Phonics**, **English**,
and **Spanish**, organized by age tier with searchable lessons and games for
practice. Each user signs in with a first name, last name, and a 4-digit code
to track their own progress on the device.

## Run it

It's pure HTML/CSS/JS — no build step.

```bash
# from the repo root
python3 -m http.server 8080
# then open http://localhost:8080
```

You can also just open `index.html` directly in a browser.

## Features

- **Sign-in with name + 4-digit code.** Profile is keyed locally; the same
  name+code combo loads the same progress on the same device.
- **Searchable lessons.** The header search box matches lesson titles,
  summaries, keywords, and subjects.
- **Subject menus.** Top nav switches between Math / Literature / Phonics /
  English / Spanish / Games / My Progress / Home.
- **Three age tiers per subject.** Early Learners (3–6), Elementary (7–10),
  and Middle School / Parent Refresher (11+).
- **Mini-games** for each major subject:
  - Addition Sprint, Times Table Quiz (Math)
  - Letter Sound Match (Phonics)
  - Spanish Word Match
  - Parts of Speech (English)
  - Guess the Genre (Literature)
- **Progress tracking.** Lessons can be marked complete, and game scores are
  saved per-profile. The "My Progress" tab shows lesson completion and best
  game scores, and lets you export progress as JSON.

## File layout

```
index.html   – app shell (login + nav + content + modal)
styles.css   – styles
data.js      – curriculum content + searchable index + game catalog
games.js     – mini-game implementations
app.js       – login, routing, rendering, search, progress
```

## Privacy

All data is stored in your browser's `localStorage`. Nothing leaves the device.
The 4-digit code is not a security credential — it's just a way to keep
multiple profiles separate on the same browser.
