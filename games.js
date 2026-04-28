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
