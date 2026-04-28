// LearnPal mini-games. Each game exposes a single function that takes
// a container element + an onFinish(score, total) callback.
window.GAMES = {};

// ---------- shared helpers ----------
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function quizShell(container, opts) {
  const { totalQuestions, makeQuestion, onFinish, title } = opts;
  let q = 0;
  let correct = 0;

  function renderEnd() {
    container.innerHTML = `
      <div class="game-end">
        <h3>${title} — done!</h3>
        <div class="score">${correct} / ${totalQuestions}</div>
        <p>${correct === totalQuestions ? "🌟 Perfect score!" : "Great effort — try again to beat your score."}</p>
        <div class="complete-row">
          <button class="replay-btn" data-act="replay">Play again</button>
          <button class="complete-btn" data-act="done">Save score</button>
        </div>
      </div>
    `;
    container.querySelector('[data-act="replay"]').onclick = () => {
      q = 0; correct = 0; nextQuestion();
    };
    container.querySelector('[data-act="done"]').onclick = () => {
      onFinish(correct, totalQuestions);
    };
  }

  function nextQuestion() {
    if (q >= totalQuestions) return renderEnd();
    const { prompt, options, answer } = makeQuestion();
    container.innerHTML = `
      <div class="game-area">
        <div class="game-status">
          <span>Question ${q + 1} / ${totalQuestions}</span>
          <span>Score: ${correct}</span>
        </div>
        <div class="game-question">${prompt}</div>
        <div class="game-options">
          ${options.map((opt, i) => `<button class="game-option" data-i="${i}">${opt}</button>`).join("")}
        </div>
        <div class="feedback" aria-live="polite"></div>
      </div>
    `;
    const fb = container.querySelector(".feedback");
    container.querySelectorAll(".game-option").forEach(btn => {
      btn.onclick = () => {
        const choice = options[Number(btn.dataset.i)];
        const isRight = String(choice) === String(answer);
        btn.classList.add(isRight ? "right" : "wrong");
        if (!isRight) {
          container.querySelectorAll(".game-option").forEach(b => {
            if (options[Number(b.dataset.i)] === answer) b.classList.add("right");
          });
        }
        if (isRight) { correct++; fb.textContent = "Correct! ✨"; fb.className = "feedback good"; }
        else { fb.textContent = `Answer: ${answer}`; fb.className = "feedback bad"; }
        container.querySelectorAll(".game-option").forEach(b => b.disabled = true);
        setTimeout(() => { q++; nextQuestion(); }, 900);
      };
    });
  }

  nextQuestion();
}

// ---------- Math: Addition Sprint ----------
GAMES["math-add"] = function (el, onFinish) {
  quizShell(el, {
    title: "Addition Sprint",
    totalQuestions: 8,
    onFinish,
    makeQuestion() {
      const a = rand(1, 12);
      const b = rand(1, 12);
      const answer = a + b;
      const opts = new Set([answer]);
      while (opts.size < 4) opts.add(answer + rand(-5, 5));
      return { prompt: `${a} + ${b} = ?`, options: shuffle([...opts]), answer };
    }
  });
};

// ---------- Math: Times Table ----------
GAMES["math-mult"] = function (el, onFinish) {
  quizShell(el, {
    title: "Times Table Quiz",
    totalQuestions: 8,
    onFinish,
    makeQuestion() {
      const a = rand(2, 12);
      const b = rand(2, 12);
      const answer = a * b;
      const opts = new Set([answer]);
      while (opts.size < 4) opts.add(answer + rand(-10, 10) || answer + 1);
      return { prompt: `${a} × ${b} = ?`, options: shuffle([...opts]), answer };
    }
  });
};

// ---------- Phonics: Letter Sound Match ----------
GAMES["phon-letter"] = function (el, onFinish) {
  const pairs = [
    { letter: "A", word: "Apple" }, { letter: "B", word: "Ball" },
    { letter: "C", word: "Cat" },   { letter: "D", word: "Dog" },
    { letter: "E", word: "Egg" },   { letter: "F", word: "Fish" },
    { letter: "G", word: "Goat" },  { letter: "H", word: "Hat" },
    { letter: "M", word: "Moon" },  { letter: "S", word: "Sun" },
    { letter: "T", word: "Tree" },  { letter: "P", word: "Pig" }
  ];
  quizShell(el, {
    title: "Letter Sound Match",
    totalQuestions: 8,
    onFinish,
    makeQuestion() {
      const target = pairs[rand(0, pairs.length - 1)];
      const distractors = shuffle(pairs.filter(p => p.word !== target.word)).slice(0, 3).map(p => p.word);
      return {
        prompt: `Which word starts with the letter "${target.letter}"?`,
        options: shuffle([target.word, ...distractors]),
        answer: target.word
      };
    }
  });
};

// ---------- Spanish: Word Match ----------
GAMES["spa-vocab"] = function (el, onFinish) {
  const words = [
    { es: "perro",    en: "dog" },     { es: "gato",     en: "cat" },
    { es: "rojo",     en: "red" },     { es: "azul",     en: "blue" },
    { es: "amarillo", en: "yellow" },  { es: "uno",      en: "one" },
    { es: "dos",      en: "two" },     { es: "tres",     en: "three" },
    { es: "hola",     en: "hello" },   { es: "adiós",    en: "goodbye" },
    { es: "gracias",  en: "thank you"},{ es: "agua",     en: "water" },
    { es: "libro",    en: "book" },    { es: "casa",     en: "house" }
  ];
  quizShell(el, {
    title: "Spanish Word Match",
    totalQuestions: 8,
    onFinish,
    makeQuestion() {
      const target = words[rand(0, words.length - 1)];
      const distractors = shuffle(words.filter(w => w.en !== target.en)).slice(0, 3).map(w => w.en);
      return {
        prompt: `What does <em>${target.es}</em> mean?`,
        options: shuffle([target.en, ...distractors]),
        answer: target.en
      };
    }
  });
};

// ---------- English: Parts of Speech ----------
GAMES["eng-pos"] = function (el, onFinish) {
  const items = [
    { sentence: "The <u>quick</u> fox jumps.",      answer: "Adjective" },
    { sentence: "She <u>runs</u> every morning.",    answer: "Verb" },
    { sentence: "The <u>park</u> is full today.",    answer: "Noun" },
    { sentence: "He sings <u>loudly</u>.",           answer: "Adverb" },
    { sentence: "The cat sat <u>on</u> the mat.",    answer: "Preposition" },
    { sentence: "<u>Wow</u>! That was amazing.",     answer: "Interjection" },
    { sentence: "I like apples <u>and</u> pears.",   answer: "Conjunction" },
    { sentence: "<u>She</u> went to the store.",     answer: "Pronoun" }
  ];
  const choices = ["Noun", "Verb", "Adjective", "Adverb", "Pronoun", "Preposition", "Conjunction", "Interjection"];
  quizShell(el, {
    title: "Parts of Speech",
    totalQuestions: 6,
    onFinish,
    makeQuestion() {
      const item = items[rand(0, items.length - 1)];
      const distractors = shuffle(choices.filter(c => c !== item.answer)).slice(0, 3);
      return {
        prompt: item.sentence,
        options: shuffle([item.answer, ...distractors]),
        answer: item.answer
      };
    }
  });
};

// ---------- Memory Match (Spanish ↔ English) ----------
GAMES["mem-match"] = function (el, onFinish) {
  const pool = [
    { es: "perro", en: "dog" }, { es: "gato", en: "cat" },
    { es: "rojo", en: "red" }, { es: "azul", en: "blue" },
    { es: "uno", en: "one" }, { es: "dos", en: "two" },
    { es: "casa", en: "house" }, { es: "agua", en: "water" },
    { es: "libro", en: "book" }, { es: "sol", en: "sun" }
  ];
  const pairs = shuffle(pool).slice(0, 6); // 6 pairs → 12 cards
  const totalPairs = pairs.length;
  let cards = [];
  pairs.forEach((p, i) => {
    cards.push({ pair: i, label: p.es, side: "es" });
    cards.push({ pair: i, label: p.en, side: "en" });
  });
  cards = shuffle(cards);
  let first = null;
  let matched = 0;
  let attempts = 0;
  let lock = false;

  function render() {
    el.innerHTML = `
      <div class="game-area">
        <div class="game-status">
          <span>Matched: ${matched} / ${totalPairs}</span>
          <span>Tries: ${attempts}</span>
        </div>
        <div class="match-grid" id="mm-grid"></div>
        <div class="feedback" aria-live="polite"></div>
      </div>
    `;
    const grid = el.querySelector("#mm-grid");
    cards.forEach((c, idx) => {
      const cell = document.createElement("button");
      cell.className = "match-cell";
      cell.dataset.idx = idx;
      cell.textContent = c.flipped || c.matched ? c.label : "?";
      if (c.matched) cell.classList.add("matched");
      else if (c.flipped) cell.classList.add("selected");
      cell.disabled = c.matched || lock;
      cell.onclick = () => onClick(idx);
      grid.appendChild(cell);
    });
  }

  function onClick(idx) {
    if (lock) return;
    const card = cards[idx];
    if (card.matched || card.flipped) return;
    card.flipped = true;
    if (!first) {
      first = idx;
      render();
      return;
    }
    attempts++;
    const a = cards[first];
    const b = card;
    if (a.pair === b.pair && a.side !== b.side) {
      a.matched = true; b.matched = true;
      matched++;
      first = null;
      render();
      if (matched === totalPairs) finish();
    } else {
      lock = true;
      render();
      setTimeout(() => {
        a.flipped = false; b.flipped = false;
        first = null; lock = false;
        render();
      }, 850);
    }
  }

  function finish() {
    el.innerHTML = `
      <div class="game-end">
        <h3>Memory Match — done!</h3>
        <div class="score">${matched} / ${totalPairs}</div>
        <p>Solved in <strong>${attempts}</strong> tries.</p>
        <div class="complete-row">
          <button class="replay-btn" id="mm-replay">Play again</button>
          <button class="complete-btn" id="mm-save">Save score</button>
        </div>
      </div>
    `;
    el.querySelector("#mm-replay").onclick = () => GAMES["mem-match"](el, onFinish);
    el.querySelector("#mm-save").onclick = () => onFinish(matched, totalPairs);
  }

  render();
};

// ---------- Fraction Pizza ----------
GAMES["math-pizza"] = function (el, onFinish) {
  const totalQuestions = 5;
  let q = 0, correct = 0;
  let denom = 0, target = 0, filled = new Set();

  function nextQ() {
    if (q >= totalQuestions) return finish();
    denom = [4, 6, 8][rand(0, 2)];
    target = rand(1, denom - 1);
    filled = new Set();
    render();
  }

  function render() {
    el.innerHTML = `
      <div class="game-area">
        <div class="game-status">
          <span>Question ${q + 1} / ${totalQuestions}</span>
          <span>Score: ${correct}</span>
        </div>
        <div class="game-question">Show <strong>${target} / ${denom}</strong> of the pizza</div>
        <div style="display:flex;justify-content:center;">${pizzaSvg(denom, filled)}</div>
        <div class="complete-row" style="justify-content:center;">
          <button class="replay-btn" id="pz-clear">Clear</button>
          <button class="complete-btn" id="pz-check">Check answer</button>
        </div>
        <div class="feedback" aria-live="polite"></div>
      </div>
    `;
    el.querySelectorAll(".pz-slice").forEach(s => {
      s.onclick = () => {
        const i = Number(s.dataset.i);
        if (filled.has(i)) filled.delete(i); else filled.add(i);
        render();
      };
    });
    el.querySelector("#pz-clear").onclick = () => { filled = new Set(); render(); };
    el.querySelector("#pz-check").onclick = () => {
      const fb = el.querySelector(".feedback");
      if (filled.size === target) {
        correct++;
        fb.textContent = "Correct! ✨";
        fb.className = "feedback good";
      } else {
        fb.textContent = `Not quite — you filled ${filled.size}/${denom}, target was ${target}/${denom}.`;
        fb.className = "feedback bad";
      }
      el.querySelectorAll(".pz-slice").forEach(s => s.style.pointerEvents = "none");
      el.querySelector("#pz-check").disabled = true;
      el.querySelector("#pz-clear").disabled = true;
      setTimeout(() => { q++; nextQ(); }, 1100);
    };
  }

  function pizzaSvg(n, filledSet) {
    const cx = 110, cy = 110, r = 100;
    let paths = "";
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2 - Math.PI / 2;
      const a1 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2;
      const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
      const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      const large = (a1 - a0) > Math.PI ? 1 : 0;
      const fill = filledSet.has(i) ? "#f59e0b" : "#fff7ed";
      const d = `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
      paths += `<path class="pz-slice" data-i="${i}" d="${d}" fill="${fill}" stroke="#92400e" stroke-width="2" style="cursor:pointer"></path>`;
    }
    return `<svg width="220" height="220" viewBox="0 0 220 220" role="img" aria-label="Pizza divided into ${n} slices">${paths}</svg>`;
  }

  function finish() {
    el.innerHTML = `
      <div class="game-end">
        <h3>Fraction Pizza — done!</h3>
        <div class="score">${correct} / ${totalQuestions}</div>
        <div class="complete-row">
          <button class="replay-btn" id="pz-replay">Play again</button>
          <button class="complete-btn" id="pz-save">Save score</button>
        </div>
      </div>`;
    el.querySelector("#pz-replay").onclick = () => GAMES["math-pizza"](el, onFinish);
    el.querySelector("#pz-save").onclick = () => onFinish(correct, totalQuestions);
  }

  nextQ();
};

// ---------- Spell Jumble ----------
GAMES["spell-jumble"] = function (el, onFinish) {
  const words = [
    { word: "cat",    clue: "A small furry pet that says meow." },
    { word: "moon",   clue: "Bright object you see in the night sky." },
    { word: "apple",  clue: "A red or green fruit." },
    { word: "happy",  clue: "How you feel when you smile." },
    { word: "perro",  clue: "Spanish word for dog." },
    { word: "agua",   clue: "Spanish word for water." },
    { word: "libro",  clue: "Spanish word for book." },
    { word: "sun",    clue: "Bright star we see during the day." }
  ];
  const totalQ = 5;
  let q = 0, correct = 0;
  let target = "", letters = [], chosen = [];

  function nextQ() {
    if (q >= totalQ) return finish();
    const item = words[rand(0, words.length - 1)];
    target = item.word;
    letters = shuffle(target.split(""));
    if (letters.join("") === target) letters = shuffle(letters); // re-shuffle if accidentally right
    chosen = [];
    render(item.clue);
  }

  function render(clue) {
    el.innerHTML = `
      <div class="game-area">
        <div class="game-status">
          <span>Question ${q + 1} / ${totalQ}</span>
          <span>Score: ${correct}</span>
        </div>
        <div class="game-question" style="font-size:18px;">${clue}</div>
        <div style="display:flex;justify-content:center;gap:6px;margin:10px 0;min-height:40px;">
          ${chosen.map((c, i) => `<button class="match-cell selected" data-rm="${i}" style="min-width:40px;min-height:40px;">${escapeHtml(c)}</button>`).join("")}
        </div>
        <div style="display:flex;justify-content:center;gap:6px;flex-wrap:wrap;">
          ${letters.map((c, i) => c === null ? "" : `<button class="match-cell" data-add="${i}" style="min-width:40px;min-height:40px;">${escapeHtml(c)}</button>`).join("")}
        </div>
        <div class="complete-row" style="justify-content:center;">
          <button class="replay-btn" id="sj-clear">Clear</button>
          <button class="complete-btn" id="sj-check">Check</button>
        </div>
        <div class="feedback" aria-live="polite"></div>
      </div>
    `;
    el.querySelectorAll("[data-add]").forEach(b => {
      b.onclick = () => {
        const i = Number(b.dataset.add);
        chosen.push(letters[i]);
        letters[i] = null;
        render(clue);
      };
    });
    el.querySelectorAll("[data-rm]").forEach(b => {
      b.onclick = () => {
        const i = Number(b.dataset.rm);
        const c = chosen.splice(i, 1)[0];
        const slot = letters.findIndex(x => x === null);
        if (slot >= 0) letters[slot] = c;
        else letters.push(c);
        render(clue);
      };
    });
    el.querySelector("#sj-clear").onclick = () => {
      while (chosen.length) {
        const c = chosen.pop();
        const slot = letters.findIndex(x => x === null);
        if (slot >= 0) letters[slot] = c; else letters.push(c);
      }
      render(clue);
    };
    el.querySelector("#sj-check").onclick = () => {
      const fb = el.querySelector(".feedback");
      if (chosen.join("").toLowerCase() === target.toLowerCase()) {
        correct++;
        fb.textContent = `Correct! ${target}`;
        fb.className = "feedback good";
      } else {
        fb.textContent = `Answer: ${target}`;
        fb.className = "feedback bad";
      }
      setTimeout(() => { q++; nextQ(); }, 1100);
    };
  }

  function finish() {
    el.innerHTML = `
      <div class="game-end">
        <h3>Spell Jumble — done!</h3>
        <div class="score">${correct} / ${totalQ}</div>
        <div class="complete-row">
          <button class="replay-btn" id="sj-replay">Play again</button>
          <button class="complete-btn" id="sj-save">Save score</button>
        </div>
      </div>`;
    el.querySelector("#sj-replay").onclick = () => GAMES["spell-jumble"](el, onFinish);
    el.querySelector("#sj-save").onclick = () => onFinish(correct, totalQ);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }

  nextQ();
};

// ---------- Literature: Guess the Genre ----------
GAMES["lit-genre"] = function (el, onFinish) {
  const items = [
    { clue: "A young wizard discovers a magical school in another world.", answer: "Fantasy" },
    { clue: "A detective searches a small town for a missing necklace.",   answer: "Mystery" },
    { clue: "A book that retells the life of Marie Curie.",                 answer: "Biography" },
    { clue: "A robot crew explores a distant planet in the year 3000.",     answer: "Science Fiction" },
    { clue: "A poem about the changing of autumn leaves.",                  answer: "Poetry" },
    { clue: "A textbook explaining how volcanoes form.",                    answer: "Nonfiction" },
    { clue: "A boy and his grandfather try to save the family farm.",       answer: "Realistic Fiction" }
  ];
  const choices = ["Fantasy", "Mystery", "Biography", "Science Fiction", "Poetry", "Nonfiction", "Realistic Fiction"];
  quizShell(el, {
    title: "Guess the Genre",
    totalQuestions: 6,
    onFinish,
    makeQuestion() {
      const item = items[rand(0, items.length - 1)];
      const distractors = shuffle(choices.filter(c => c !== item.answer)).slice(0, 3);
      return {
        prompt: item.clue,
        options: shuffle([item.answer, ...distractors]),
        answer: item.answer
      };
    }
  });
};
