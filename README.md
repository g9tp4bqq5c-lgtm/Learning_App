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

You can also just open `index.html` directly in a browser, but the service
worker (offline mode + Install button) only registers when served via http(s).

## Features

- **Sign-in with name + 4-digit code.** Profile is keyed locally; the same
  name+code combo loads the same progress on the same device.
- **Parent Hub.** A button on the login screen opens a dashboard listing every
  profile saved on the device, with last-active date, lesson/game counts, the
  4-digit code (so a parent can remind a child), and a delete button.
- **Searchable lessons.** The header search box matches lesson titles,
  summaries, keywords, and subjects.
- **Subject menus.** Top nav switches between Math / Literature / Phonics /
  English / Spanish / Games / My Progress / Home.
- **Three age tiers per subject.** Early Learners (3–6), Elementary (7–10),
  and Middle School / Parent Refresher (11+). Each subject page has age-tier
  filter chips so a parent or older sibling can focus the view.
- **Listen button** on every lesson uses the browser's Web Speech API to read
  the lesson aloud — Spanish lessons read in `es-ES`, others in `en-US`.
- **Nine mini-games** for practice:
  - Math: Addition Sprint, Times Table Quiz, Fraction Pizza
  - Phonics: Letter Sound Match, Spell Jumble
  - Spanish: Spanish Word Match, Memory Match
  - English: Parts of Speech
  - Literature: Guess the Genre
- **Progress tracking.** Lessons can be marked complete, and game scores are
  saved per-profile. The "My Progress" tab shows lesson completion and best
  game scores, and lets you export progress as JSON or reset it.
- **Installable PWA.** A manifest + service worker mean the app can be
  installed to a home screen (the header's 📥 Install button appears when the
  browser allows it) and works offline after the first visit.

## File layout

```
index.html      – app shell (login + parent hub + nav + content + modal)
styles.css      – styles
data.js         – curriculum content + searchable index + game catalog
games.js        – mini-game implementations
app.js          – login, routing, rendering, search, speech, parent hub, PWA
manifest.json   – PWA manifest
sw.js           – service worker (offline cache)
icon.svg        – app icon
```

## Privacy

All data is stored in your browser's `localStorage`. Nothing leaves the device.
The 4-digit code is not a security credential — it's just a way to keep
multiple profiles separate on the same browser, and the Parent Hub displays it
intentionally so a parent on the same device can help a child sign in.
