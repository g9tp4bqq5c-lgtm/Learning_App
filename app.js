// LearnPal main app: login, routing, rendering, search, progress.
(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const STORAGE_PREFIX = "learnpal:user:";
  const SESSION_KEY = "learnpal:session";

  let state = {
    user: null,         // { firstName, lastName, pin, key }
    profile: null,      // { lessonsCompleted: {id: ts}, gameScores: {id: [{score,total,ts}]} }
    currentSubject: "home"
  };

  // ----- Profile storage -----
  function userKey(firstName, lastName, pin) {
    const norm = (s) => s.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    return `${STORAGE_PREFIX}${norm(firstName)}_${norm(lastName)}_${pin}`;
  }
  function loadProfile(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return { lessonsCompleted: {}, gameScores: {}, createdAt: Date.now() };
      const data = JSON.parse(raw);
      data.lessonsCompleted = data.lessonsCompleted || {};
      data.gameScores = data.gameScores || {};
      return data;
    } catch {
      return { lessonsCompleted: {}, gameScores: {}, createdAt: Date.now() };
    }
  }
  function saveProfile() {
    if (!state.user) return;
    state.profile.updatedAt = Date.now();
    localStorage.setItem(state.user.key, JSON.stringify(state.profile));
  }

  // ----- Auth -----
  function showLogin() {
    $("#login-screen").classList.add("active");
    $("#app-screen").classList.remove("active");
  }
  function showApp() {
    $("#login-screen").classList.remove("active");
    $("#app-screen").classList.add("active");
    $("#user-greeting").textContent = `Hi, ${state.user.firstName}!`;
    renderSubject(state.currentSubject || "home");
  }

  function attemptLogin(e) {
    e.preventDefault();
    const firstName = $("#first-name").value.trim();
    const lastName = $("#last-name").value.trim();
    const pin = $("#pin").value.trim();
    const err = $("#login-error");
    err.textContent = "";

    if (!firstName || !lastName) {
      err.textContent = "Please enter your first and last name.";
      return;
    }
    if (!/^\d{4}$/.test(pin)) {
      err.textContent = "Code must be exactly 4 digits.";
      return;
    }

    const key = userKey(firstName, lastName, pin);
    state.user = { firstName, lastName, pin, key };
    state.profile = loadProfile(key);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ firstName, lastName, pin }));
    saveProfile();
    showApp();
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    state.user = null;
    state.profile = null;
    state.currentSubject = "home";
    $("#login-form").reset();
    showLogin();
  }

  function tryRestoreSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return false;
      const { firstName, lastName, pin } = JSON.parse(raw);
      if (!firstName || !lastName || !/^\d{4}$/.test(pin)) return false;
      const key = userKey(firstName, lastName, pin);
      state.user = { firstName, lastName, pin, key };
      state.profile = loadProfile(key);
      return true;
    } catch { return false; }
  }

  // ----- Rendering -----
  function setActiveSubject(subj) {
    state.currentSubject = subj;
    $$(".subj-btn").forEach(b => b.classList.toggle("active", b.dataset.subject === subj));
  }

  function renderSubject(subj) {
    setActiveSubject(subj);
    const content = $("#content");
    content.scrollTop = 0;
    if (subj === "home") return renderHome(content);
    if (subj === "games") return renderGamesIndex(content);
    if (subj === "progress") return renderProgress(content);
    return renderSubjectPage(content, subj);
  }

  function renderHome(root) {
    const userName = state.user.firstName;
    const totalLessons = window.LESSON_INDEX.length;
    const done = Object.keys(state.profile.lessonsCompleted).length;
    const gamesPlayed = Object.values(state.profile.gameScores).reduce((n, a) => n + a.length, 0);

    root.innerHTML = `
      <h2 class="section-title">Welcome back, ${escapeHtml(userName)} 👋</h2>
      <p class="section-sub">Pick a subject to keep learning, or try a game.</p>

      <div class="stats-row">
        <div class="stat"><div class="num">${done}</div><div class="label">Lessons completed</div></div>
        <div class="stat"><div class="num">${totalLessons}</div><div class="label">Lessons available</div></div>
        <div class="stat"><div class="num">${gamesPlayed}</div><div class="label">Games played</div></div>
      </div>

      <div class="dash-grid">
        ${["math","literature","phonics","english","spanish","games"].map(k => {
          const meta = k === "games"
            ? { label: "Games", icon: "🎮", description: "Practice through play." }
            : window.CURRICULUM[k];
          return `
            <button class="dash-card dash-${k}" data-subject="${k}">
              <span style="font-size:28px">${meta.icon}</span><br/>${meta.label}
              <small>${meta.description}</small>
            </button>`;
        }).join("")}
      </div>
    `;
    $$(".dash-card", root).forEach(card => {
      card.onclick = () => renderSubject(card.dataset.subject);
    });
  }

  function renderSubjectPage(root, subjectKey) {
    const subj = window.CURRICULUM[subjectKey];
    if (!subj) { root.innerHTML = "<p>Subject not found.</p>"; return; }

    const tiersHtml = Object.entries(subj.tiers).map(([tierKey, tier]) => {
      const cards = tier.lessons.map(lesson => {
        const isDone = !!state.profile.lessonsCompleted[lesson.id];
        return `
          <button class="card" data-lesson="${lesson.id}" data-subject="${subjectKey}">
            <div class="card-title">${escapeHtml(lesson.title)}${isDone ? ' <span class="badge-done">Done</span>' : ""}</div>
            <p class="card-desc">${escapeHtml(lesson.summary)}</p>
            <div class="card-meta">${tier.ages}</div>
          </button>`;
      }).join("");
      return `
        <section class="tier-row">
          <h3>${tier.label}<span class="age">${tier.ages}</span></h3>
          <div class="card-grid">${cards}</div>
        </section>`;
    }).join("");

    root.innerHTML = `
      <h2 class="section-title">${subj.icon} ${subj.label}</h2>
      <p class="section-sub">${subj.description}</p>
      ${tiersHtml}
    `;
    $$(".card", root).forEach(card => {
      card.onclick = () => openLesson(card.dataset.subject, card.dataset.lesson);
    });
  }

  function findLesson(subjectKey, lessonId) {
    const subj = window.CURRICULUM[subjectKey];
    if (!subj) return null;
    for (const tier of Object.values(subj.tiers)) {
      const found = tier.lessons.find(l => l.id === lessonId);
      if (found) return { lesson: found, subject: subj };
    }
    return null;
  }

  function openLesson(subjectKey, lessonId) {
    const found = findLesson(subjectKey, lessonId);
    if (!found) return;
    const { lesson, subject } = found;
    const isDone = !!state.profile.lessonsCompleted[lesson.id];
    openModal(`${subject.icon} ${lesson.title}`, `
      <div class="lesson-text">${lesson.body}</div>
      <div class="complete-row">
        <button class="complete-btn" id="mark-complete">${isDone ? "✓ Already complete" : "Mark complete"}</button>
        <button class="replay-btn" id="back-to-subject">Back to ${escapeHtml(subject.label)}</button>
      </div>
    `);
    $("#mark-complete").onclick = () => {
      state.profile.lessonsCompleted[lesson.id] = Date.now();
      saveProfile();
      closeModal();
      renderSubject(subjectKey);
    };
    $("#back-to-subject").onclick = () => {
      closeModal();
      renderSubject(subjectKey);
    };
  }

  // ----- Games -----
  function renderGamesIndex(root) {
    const cards = window.GAME_CATALOG.map(g => {
      const scores = state.profile.gameScores[g.id] || [];
      const best = scores.reduce((m, s) => Math.max(m, s.score), 0);
      return `
        <button class="card" data-game="${g.id}">
          <div class="card-title">${g.icon} ${escapeHtml(g.title)}</div>
          <p class="card-desc">${escapeHtml(g.desc)}</p>
          <div class="card-meta">${window.CURRICULUM[g.subject]?.label || g.subject}${scores.length ? ` · best ${best}` : ""}</div>
        </button>`;
    }).join("");
    root.innerHTML = `
      <h2 class="section-title">🎮 Games</h2>
      <p class="section-sub">Quick games for practice. Scores save to your profile.</p>
      <div class="card-grid">${cards}</div>
    `;
    $$(".card", root).forEach(c => c.onclick = () => openGame(c.dataset.game));
  }

  function openGame(gameId) {
    const meta = window.GAME_CATALOG.find(g => g.id === gameId);
    const fn = window.GAMES[gameId];
    if (!meta || !fn) return;

    openModal(`${meta.icon} ${meta.title}`, `<div id="game-host"></div>`);
    fn($("#game-host"), (score, total) => {
      const list = state.profile.gameScores[gameId] || [];
      list.push({ score, total, ts: Date.now() });
      state.profile.gameScores[gameId] = list;
      saveProfile();
      $("#game-host").innerHTML = `
        <div class="game-end">
          <h3>Score saved!</h3>
          <div class="score">${score} / ${total}</div>
          <p>Keep going — your best progress is tracked.</p>
          <div class="complete-row">
            <button class="replay-btn" id="play-again">Play again</button>
            <button class="complete-btn" id="game-back">Back to games</button>
          </div>
        </div>`;
      $("#play-again").onclick = () => openGame(gameId);
      $("#game-back").onclick = () => { closeModal(); renderSubject("games"); };
    });
  }

  // ----- Progress -----
  function renderProgress(root) {
    const lessonRows = window.LESSON_INDEX.map(l => {
      const ts = state.profile.lessonsCompleted[l.id];
      return `
        <tr>
          <td>${escapeHtml(l.subjectLabel)}</td>
          <td>${escapeHtml(l.title)}</td>
          <td>${escapeHtml(l.tierLabel)}</td>
          <td>${ts ? new Date(ts).toLocaleDateString() : "<span style='color:#94a3b8'>—</span>"}</td>
        </tr>`;
    }).join("");

    const gameRows = window.GAME_CATALOG.map(g => {
      const scores = state.profile.gameScores[g.id] || [];
      const best = scores.reduce((m, s) => Math.max(m, s.score), 0);
      const last = scores[scores.length - 1];
      return `
        <tr>
          <td>${escapeHtml(g.title)}</td>
          <td>${scores.length}</td>
          <td>${scores.length ? best : "—"}</td>
          <td>${last ? new Date(last.ts).toLocaleDateString() : "—"}</td>
        </tr>`;
    }).join("");

    const totalDone = Object.keys(state.profile.lessonsCompleted).length;
    const totalLessons = window.LESSON_INDEX.length;
    const pct = totalLessons ? Math.round((totalDone / totalLessons) * 100) : 0;

    root.innerHTML = `
      <h2 class="section-title">📈 ${escapeHtml(state.user.firstName)}'s Progress</h2>
      <p class="section-sub">${totalDone} of ${totalLessons} lessons complete (${pct}%).</p>

      <h3>Lessons</h3>
      <table class="progress-table">
        <thead><tr><th>Subject</th><th>Lesson</th><th>Tier</th><th>Completed</th></tr></thead>
        <tbody>${lessonRows}</tbody>
      </table>

      <h3 style="margin-top:24px;">Games</h3>
      <table class="progress-table">
        <thead><tr><th>Game</th><th>Plays</th><th>Best score</th><th>Last played</th></tr></thead>
        <tbody>${gameRows}</tbody>
      </table>

      <div class="complete-row" style="margin-top:18px">
        <button class="replay-btn" id="export-progress">Download my progress (JSON)</button>
        <button class="ghost-btn" id="reset-progress">Reset my progress</button>
      </div>
    `;
    $("#export-progress").onclick = () => {
      const blob = new Blob([JSON.stringify({ user: state.user, profile: state.profile }, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `learnpal-${state.user.firstName}-${state.user.lastName}.json`;
      a.click();
      URL.revokeObjectURL(a.href);
    };
    $("#reset-progress").onclick = () => {
      if (confirm("Erase all your saved lessons and game scores?")) {
        state.profile = { lessonsCompleted: {}, gameScores: {}, createdAt: Date.now() };
        saveProfile();
        renderProgress(root);
      }
    };
  }

  // ----- Search -----
  function runSearch(query) {
    const list = $("#search-results");
    const q = query.trim().toLowerCase();
    if (!q) { list.hidden = true; list.innerHTML = ""; return; }
    const matches = window.LESSON_INDEX.filter(l => {
      const hay = (l.title + " " + l.summary + " " + (l.keywords || []).join(" ") + " " + l.subjectLabel).toLowerCase();
      return hay.includes(q);
    }).slice(0, 10);
    if (!matches.length) {
      list.innerHTML = `<li style="color:#64748b">No lessons match "${escapeHtml(q)}".</li>`;
      list.hidden = false;
      return;
    }
    list.innerHTML = matches.map(m => `
      <li data-subject="${m.subject}" data-lesson="${m.id}" tabindex="0">
        <span class="subj-tag">${escapeHtml(m.subjectLabel)}</span>
        <strong>${escapeHtml(m.title)}</strong>
        <div style="font-size:13px;color:#64748b">${escapeHtml(m.summary)} · ${escapeHtml(m.ages)}</div>
      </li>`).join("");
    list.hidden = false;
    $$("li", list).forEach(li => {
      li.onclick = () => {
        $("#search").value = "";
        list.hidden = true;
        renderSubject(li.dataset.subject);
        openLesson(li.dataset.subject, li.dataset.lesson);
      };
      li.onkeydown = (e) => { if (e.key === "Enter") li.click(); };
    });
  }

  // ----- Modal -----
  function openModal(title, html) {
    $("#modal-title").textContent = title;
    $("#modal-body").innerHTML = html;
    $("#modal").hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    $("#modal").hidden = true;
    $("#modal-body").innerHTML = "";
    document.body.style.overflow = "";
  }

  // ----- Utils -----
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  // ----- Wire up -----
  function init() {
    $("#login-form").addEventListener("submit", attemptLogin);
    $("#logout-btn").addEventListener("click", logout);

    $$(".subj-btn").forEach(btn => {
      btn.addEventListener("click", () => renderSubject(btn.dataset.subject));
    });

    const search = $("#search");
    search.addEventListener("input", e => runSearch(e.target.value));
    search.addEventListener("focus", e => { if (e.target.value) runSearch(e.target.value); });
    document.addEventListener("click", e => {
      if (!e.target.closest(".search-wrap")) $("#search-results").hidden = true;
    });

    $("#modal-close").addEventListener("click", closeModal);
    $("#modal").addEventListener("click", e => {
      if (e.target.id === "modal") closeModal();
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && !$("#modal").hidden) closeModal();
    });

    // Restrict PIN to digits as user types.
    $("#pin").addEventListener("input", e => {
      e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
    });

    if (tryRestoreSession()) showApp();
    else showLogin();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
