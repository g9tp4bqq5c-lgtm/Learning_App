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

- **Sign-in with name, age group, and 4-digit code.** The age group (3–6 / 7–10 / 11+ / Parent) tailors the experience: the app defaults the tier filter, picks an enunciation rate for audio, and unlocks parent-only views.
- **Parent profile.** Choosing "Parent / grown-up helper" at sign-in adds a **Manage Profiles** tab inside the app where a grown-up can see every learner on the device, view their 4-digit code, and remove a profile.
- **Parent Hub on the login screen** (no sign-in needed) lists all profiles with last-active date, lesson/game counts, codes, and delete buttons.
- **Searchable lessons.** Header search matches title, summary, keywords, and subject.
- **Subject menus.** Top nav: Math / Literature / Phonics / English / Spanish / Games / My Progress / Home (and Manage Profiles for parents).
- **Three age tiers per subject** — Early Learners (3–6), Elementary (7–10), Middle / Parent Refresher (11+). Each subject page has tier-filter chips and starts on the user's selected age tier.
- **Audio that respects each age**:
  - Login screen has a "🔊 Read instructions aloud" button so non-readers can hear what to do.
  - Every lesson has a "🔊 Listen to the whole lesson" button.
  - Every key term, vocabulary word, and Spanish phrase has its own inline 🔊 button — tap any single word to hear it pronounced clearly. Spanish words speak in `es-ES`, English in `en-US`.
  - Speech rate is slower for younger learners (≈0.7× for 3–6, 0.85× for 7–10, ≈1× for 11+ and parents) so consonants and vowels are easier to make out.
- **Deeper, structured lessons.** Each rewritten lesson has clear sections:
  *What it is*, *Key terms* (with pronunciation), *Examples*, *Watch out for*,
  and a **Your Turn — Try It** mini-quiz built into the lesson page.
- **Nine mini-games** — Addition Sprint, Times Table Quiz, Fraction Pizza,
  Letter Sound Match, Spell Jumble, Spanish Word Match, Memory Match, Parts
  of Speech, Guess the Genre.
- **Progress tracking.** Lessons can be marked complete; game scores save
  per-profile; the My Progress tab exports JSON or resets.
- **Installable PWA.** Manifest + service worker — install to a home screen
  with the header's 📥 button and use offline after first visit.

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

## Authoring lessons

Each lesson lives in `data.js` under `CURRICULUM[<subject>].tiers[<n>].lessons`.
A lesson can include rich HTML in `body` plus an optional `practice` array of
mini-quiz items. The renderer adds interactivity automatically:

- Wrap any term in `<span class="say">word</span>` and a 🔊 button is added
  next to it. Override pronunciation with `data-say="word"`, language with
  `data-lang="es-ES"`, and speed with `data-rate="0.7"`.
- `practice: [{ q, options, correct, explain? }]` renders as inline
  click-to-answer try-it cards under the lesson body, each with its own 🔊.
- Use `<section class="lesson-section"><h3><span class="section-icon">…</span>
  Heading</h3>…</section>` for the *What it is / Key terms / Examples /
  Watch out for* blocks.

## Privacy

All data is stored in your browser's `localStorage`. Nothing leaves the device.
The 4-digit code is not a security credential — it's just a way to keep
multiple profiles separate on the same browser, and the Parent views display
it intentionally so a parent on the same device can help a child sign in.
