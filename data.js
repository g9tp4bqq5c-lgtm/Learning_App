// LearnPal curriculum data.
// Tiers: 1 = Early Learners (ages 3-6), 2 = Elementary (7-10), 3 = Middle / Parent Refresher (11+)
window.CURRICULUM = {
  math: {
    label: "Math",
    icon: "🔢",
    description: "Counting, arithmetic, fractions, geometry, algebra and more.",
    tiers: {
      1: {
        label: "Early Learners",
        ages: "Ages 3–6",
        lessons: [
          {
            id: "math-count-10",
            title: "Counting 1 to 10",
            summary: "Learn the numbers from one to ten.",
            keywords: ["count", "numbers", "one", "two", "three", "ten"],
            body: `
              <p>Counting tells us <strong>how many</strong> of something there are.</p>
              <p>Say each number out loud:</p>
              <p class="lesson-text" style="font-size:24px;text-align:center;">1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10</p>
              <p>Try counting your fingers, then your toes!</p>
              <h3>Quick example</h3>
              <p>🍎🍎🍎 → That's <strong>3</strong> apples.</p>
            `
          },
          {
            id: "math-shapes",
            title: "Shapes Around Us",
            summary: "Circles, squares, triangles, and rectangles.",
            keywords: ["shapes", "circle", "square", "triangle", "rectangle"],
            body: `
              <p>Shapes are everywhere!</p>
              <ul>
                <li><strong>Circle</strong> — round, like a wheel ⚪</li>
                <li><strong>Square</strong> — 4 equal sides 🟦</li>
                <li><strong>Triangle</strong> — 3 sides 🔺</li>
                <li><strong>Rectangle</strong> — long with 4 sides ▭</li>
              </ul>
              <p>Look around the room. Can you find each shape?</p>
            `
          },
          {
            id: "math-add-small",
            title: "Adding Small Numbers",
            summary: "Putting groups together to find the total.",
            keywords: ["add", "addition", "plus", "sum"],
            body: `
              <p>Adding means putting groups together.</p>
              <p>2 + 1 = ?</p>
              <p>🐶🐶 + 🐶 = 🐶🐶🐶 → <strong>3</strong></p>
              <p>Try these:</p>
              <ul>
                <li>1 + 1 = 2</li>
                <li>2 + 2 = 4</li>
                <li>3 + 1 = 4</li>
              </ul>
            `
          }
        ]
      },
      2: {
        label: "Elementary",
        ages: "Ages 7–10",
        lessons: [
          {
            id: "math-multiplication",
            title: "Multiplication Basics",
            summary: "Multiplication is repeated addition.",
            keywords: ["multiply", "multiplication", "times tables"],
            body: `
              <p>Multiplication is a fast way to add the same number many times.</p>
              <p>3 × 4 means "3, four times" → 3 + 3 + 3 + 3 = <strong>12</strong></p>
              <h3>Times-table sample (×3)</h3>
              <ul>
                <li>3 × 1 = 3</li><li>3 × 2 = 6</li><li>3 × 3 = 9</li>
                <li>3 × 4 = 12</li><li>3 × 5 = 15</li>
              </ul>
            `
          },
          {
            id: "math-fractions",
            title: "Fractions Made Easy",
            summary: "Halves, thirds, quarters and equal parts of a whole.",
            keywords: ["fraction", "half", "quarter", "third", "denominator"],
            body: `
              <p>A fraction shows part of a whole, like a slice of pizza 🍕.</p>
              <p><strong>1/2</strong> = one of two equal parts.</p>
              <p><strong>1/4</strong> = one of four equal parts.</p>
              <p>The bottom number is the <em>denominator</em> — how many equal parts the whole is split into. The top number is the <em>numerator</em> — how many of those parts you have.</p>
            `
          },
          {
            id: "math-geometry-perimeter",
            title: "Perimeter & Area",
            summary: "Measuring the outline and the inside of a shape.",
            keywords: ["perimeter", "area", "geometry", "rectangle"],
            body: `
              <p><strong>Perimeter</strong> is the distance all the way around a shape.</p>
              <p><strong>Area</strong> is how much space is inside.</p>
              <p>For a rectangle 4cm × 3cm:</p>
              <ul>
                <li>Perimeter = 4 + 3 + 4 + 3 = <strong>14 cm</strong></li>
                <li>Area = 4 × 3 = <strong>12 cm²</strong></li>
              </ul>
            `
          }
        ]
      },
      3: {
        label: "Middle / Parent Refresher",
        ages: "Ages 11+",
        lessons: [
          {
            id: "math-algebra-basics",
            title: "Solving for x",
            summary: "Pre-algebra: isolating an unknown variable.",
            keywords: ["algebra", "variable", "equation", "solve"],
            body: `
              <p>An equation balances both sides of the "=" sign.</p>
              <p>Solve: 2x + 3 = 11</p>
              <ol>
                <li>Subtract 3 from both sides: 2x = 8</li>
                <li>Divide both sides by 2: x = <strong>4</strong></li>
              </ol>
              <p>Always do the same operation to both sides to keep things balanced.</p>
            `
          },
          {
            id: "math-percentages",
            title: "Percentages in Real Life",
            summary: "Sales, tips, and tax — quick percentage tricks.",
            keywords: ["percent", "percentage", "discount", "tip", "tax"],
            body: `
              <p>"Percent" means "per hundred". 25% = 25/100 = 0.25.</p>
              <p>Find 20% of 50:</p>
              <p>0.20 × 50 = <strong>10</strong></p>
              <h3>Tip trick</h3>
              <p>For a 15% tip on $40, take 10% ($4) and add half of that ($2) → <strong>$6</strong>.</p>
            `
          },
          {
            id: "math-decimals",
            title: "Decimals & Place Value",
            summary: "Tenths, hundredths, and ordering decimals.",
            keywords: ["decimals", "place value", "tenths", "hundredths"],
            body: `
              <p>The first digit after the decimal point is the <strong>tenths</strong> place.</p>
              <p>The second is <strong>hundredths</strong>. So 0.37 = 3 tenths and 7 hundredths.</p>
              <p>Compare 0.4 and 0.39 → 0.4 is bigger because it equals 0.40.</p>
            `
          }
        ]
      }
    }
  },

  literature: {
    label: "Literature",
    icon: "📚",
    description: "Stories, characters, plot, and the joy of reading.",
    tiers: {
      1: {
        label: "Early Learners",
        ages: "Ages 3–6",
        lessons: [
          {
            id: "lit-story-parts",
            title: "Parts of a Story",
            summary: "Beginning, middle, and end.",
            keywords: ["story", "beginning", "middle", "end"],
            body: `
              <p>Every story has three big parts:</p>
              <ul>
                <li><strong>Beginning</strong> — meet the characters.</li>
                <li><strong>Middle</strong> — something happens.</li>
                <li><strong>End</strong> — the problem is solved.</li>
              </ul>
              <p>Try retelling your favorite bedtime story in three sentences!</p>
            `
          },
          {
            id: "lit-rhymes",
            title: "Nursery Rhymes",
            summary: "Words that sound alike at the end.",
            keywords: ["rhyme", "nursery", "poem"],
            body: `
              <p>A <strong>rhyme</strong> is when words end with the same sound.</p>
              <p>"Twinkle, twinkle, little <em>star</em>, how I wonder what you <em>are</em>."</p>
              <p>Star and are rhyme. Try clapping along!</p>
            `
          }
        ]
      },
      2: {
        label: "Elementary",
        ages: "Ages 7–10",
        lessons: [
          {
            id: "lit-characters",
            title: "Main Character vs. Supporting Cast",
            summary: "Who the story is mostly about.",
            keywords: ["character", "protagonist", "main character"],
            body: `
              <p>The <strong>protagonist</strong> is the main character — the one we follow.</p>
              <p>Supporting characters help (or sometimes get in the way).</p>
              <p>In <em>Charlotte's Web</em>, Wilbur is the protagonist; Charlotte is a key supporting character.</p>
            `
          },
          {
            id: "lit-genres",
            title: "Book Genres",
            summary: "Fiction, nonfiction, mystery, fantasy, biography.",
            keywords: ["genre", "fiction", "nonfiction", "mystery", "fantasy"],
            body: `
              <ul>
                <li><strong>Fiction</strong> — made-up stories.</li>
                <li><strong>Nonfiction</strong> — true facts.</li>
                <li><strong>Mystery</strong> — a problem to solve.</li>
                <li><strong>Fantasy</strong> — magic and impossible worlds.</li>
                <li><strong>Biography</strong> — a real person's life.</li>
              </ul>
            `
          }
        ]
      },
      3: {
        label: "Middle / Parent Refresher",
        ages: "Ages 11+",
        lessons: [
          {
            id: "lit-devices",
            title: "Literary Devices",
            summary: "Metaphor, simile, foreshadowing, irony.",
            keywords: ["metaphor", "simile", "irony", "foreshadowing"],
            body: `
              <ul>
                <li><strong>Simile</strong> — compares using "like" or "as": "as brave as a lion".</li>
                <li><strong>Metaphor</strong> — calls something else: "Time is a thief".</li>
                <li><strong>Foreshadowing</strong> — hints at what's to come.</li>
                <li><strong>Irony</strong> — outcome is opposite of what's expected.</li>
              </ul>
            `
          },
          {
            id: "lit-theme",
            title: "Theme & Message",
            summary: "Finding the big idea behind the plot.",
            keywords: ["theme", "message", "moral"],
            body: `
              <p>The <strong>theme</strong> is the big idea — what the story is really about beyond the events. "Friendship", "courage", or "the cost of greed".</p>
              <p>Ask: <em>What did the main character learn? What does the author want me to feel?</em></p>
            `
          }
        ]
      }
    }
  },

  phonics: {
    label: "Phonics",
    icon: "🔤",
    description: "Letter sounds, blends, and reading first words.",
    tiers: {
      1: {
        label: "Early Learners",
        ages: "Ages 3–6",
        lessons: [
          {
            id: "phon-vowels",
            title: "Short Vowel Sounds",
            summary: "a, e, i, o, u — short sounds.",
            keywords: ["vowels", "short vowels", "a", "e", "i", "o", "u"],
            body: `
              <p>Vowels are <strong>a, e, i, o, u</strong>.</p>
              <p>Short vowel sounds:</p>
              <ul>
                <li>a → "ah" as in <em>cat</em></li>
                <li>e → "eh" as in <em>bed</em></li>
                <li>i → "ih" as in <em>sit</em></li>
                <li>o → "ah" as in <em>hot</em></li>
                <li>u → "uh" as in <em>sun</em></li>
              </ul>
            `
          },
          {
            id: "phon-cvc",
            title: "CVC Words",
            summary: "Reading consonant-vowel-consonant words.",
            keywords: ["cvc", "blend", "sound it out"],
            body: `
              <p>CVC stands for Consonant-Vowel-Consonant: cat, dog, sun, bed.</p>
              <p>Sound out each letter, then blend them: c-a-t → cat 🐱.</p>
            `
          }
        ]
      },
      2: {
        label: "Elementary",
        ages: "Ages 7–10",
        lessons: [
          {
            id: "phon-digraphs",
            title: "Digraphs (sh, ch, th)",
            summary: "Two letters that make one sound.",
            keywords: ["digraph", "sh", "ch", "th"],
            body: `
              <p>A digraph is two letters that make one sound.</p>
              <ul>
                <li><strong>sh</strong> as in <em>ship</em></li>
                <li><strong>ch</strong> as in <em>chin</em></li>
                <li><strong>th</strong> as in <em>thumb</em></li>
              </ul>
            `
          },
          {
            id: "phon-silent-e",
            title: "Magic Silent E",
            summary: "The 'e' that makes the vowel say its name.",
            keywords: ["silent e", "long vowel", "magic e"],
            body: `
              <p>Adding a silent <strong>e</strong> at the end usually makes the middle vowel say its name.</p>
              <p>cap → cape · kit → kite · hop → hope</p>
            `
          }
        ]
      },
      3: {
        label: "Middle / Parent Refresher",
        ages: "Ages 11+",
        lessons: [
          {
            id: "phon-syllables",
            title: "Syllable Types",
            summary: "Open, closed, magic-e, vowel teams, r-controlled, consonant-le.",
            keywords: ["syllables", "decoding", "open", "closed"],
            body: `
              <p>Recognizing syllable types helps decode long words.</p>
              <ul>
                <li><strong>Closed</strong> ends in a consonant, vowel is short: <em>cab</em></li>
                <li><strong>Open</strong> ends in a vowel, vowel is long: <em>he</em></li>
                <li><strong>Magic-e</strong>: <em>cake</em></li>
                <li><strong>Vowel team</strong>: <em>boat</em></li>
                <li><strong>R-controlled</strong>: <em>car</em></li>
                <li><strong>Consonant-le</strong>: <em>tab-le</em></li>
              </ul>
            `
          }
        ]
      }
    }
  },

  english: {
    label: "English",
    icon: "✏️",
    description: "Grammar, vocabulary, and writing skills.",
    tiers: {
      1: {
        label: "Early Learners",
        ages: "Ages 3–6",
        lessons: [
          {
            id: "eng-nouns",
            title: "What is a Noun?",
            summary: "Person, place, thing, or animal.",
            keywords: ["noun", "person", "place", "thing"],
            body: `
              <p>A <strong>noun</strong> names a person, place, animal, or thing.</p>
              <p>Examples: <em>teacher, park, dog, cup</em>.</p>
            `
          },
          {
            id: "eng-verbs",
            title: "Action Verbs",
            summary: "Verbs are doing words.",
            keywords: ["verb", "action"],
            body: `
              <p>A <strong>verb</strong> is a word for an action — something you do.</p>
              <p>Examples: <em>run, jump, sing, eat</em>.</p>
            `
          }
        ]
      },
      2: {
        label: "Elementary",
        ages: "Ages 7–10",
        lessons: [
          {
            id: "eng-adjectives",
            title: "Adjectives",
            summary: "Words that describe nouns.",
            keywords: ["adjective", "describe"],
            body: `
              <p>An <strong>adjective</strong> describes a noun: <em>red</em> apple, <em>tall</em> tree, <em>happy</em> dog.</p>
            `
          },
          {
            id: "eng-sentences",
            title: "Complete Sentences",
            summary: "Subject + verb + ending punctuation.",
            keywords: ["sentence", "subject", "predicate"],
            body: `
              <p>A complete sentence needs:</p>
              <ul>
                <li>A <strong>subject</strong> (who/what)</li>
                <li>A <strong>verb</strong> (the action)</li>
                <li>End punctuation (. ? !)</li>
              </ul>
              <p>"The dog runs." ✅</p>
            `
          }
        ]
      },
      3: {
        label: "Middle / Parent Refresher",
        ages: "Ages 11+",
        lessons: [
          {
            id: "eng-parts-speech",
            title: "Eight Parts of Speech",
            summary: "Noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection.",
            keywords: ["parts of speech", "grammar", "adverb", "preposition"],
            body: `
              <ul>
                <li><strong>Noun</strong> — names</li>
                <li><strong>Pronoun</strong> — replaces a noun (he, she, it)</li>
                <li><strong>Verb</strong> — action or state</li>
                <li><strong>Adjective</strong> — describes a noun</li>
                <li><strong>Adverb</strong> — describes a verb (often -ly)</li>
                <li><strong>Preposition</strong> — shows position (on, under, between)</li>
                <li><strong>Conjunction</strong> — joins (and, but, or)</li>
                <li><strong>Interjection</strong> — feeling (Wow!)</li>
              </ul>
            `
          },
          {
            id: "eng-punctuation",
            title: "Comma Rules",
            summary: "Lists, compound sentences, introductory clauses.",
            keywords: ["comma", "punctuation", "oxford comma"],
            body: `
              <ol>
                <li>Separate items in a list: apples, oranges, and pears.</li>
                <li>Before a coordinating conjunction joining two independent clauses: <em>I baked, and she cleaned.</em></li>
                <li>After an introductory phrase: <em>After dinner, we walked.</em></li>
              </ol>
            `
          }
        ]
      }
    }
  },

  spanish: {
    label: "Spanish",
    icon: "🌎",
    description: "Greetings, numbers, colors, and useful phrases.",
    tiers: {
      1: {
        label: "Early Learners",
        ages: "Ages 3–6",
        lessons: [
          {
            id: "sp-greetings",
            title: "Greetings · Saludos",
            summary: "Hello, goodbye, please, thank you.",
            keywords: ["hola", "adios", "gracias", "greetings"],
            body: `
              <ul>
                <li><strong>Hola</strong> — Hello</li>
                <li><strong>Adiós</strong> — Goodbye</li>
                <li><strong>Por favor</strong> — Please</li>
                <li><strong>Gracias</strong> — Thank you</li>
                <li><strong>De nada</strong> — You're welcome</li>
              </ul>
            `
          },
          {
            id: "sp-colors",
            title: "Colors · Colores",
            summary: "Rojo, azul, amarillo, verde…",
            keywords: ["colors", "rojo", "azul", "verde"],
            body: `
              <ul>
                <li><strong>Rojo</strong> — Red</li>
                <li><strong>Azul</strong> — Blue</li>
                <li><strong>Amarillo</strong> — Yellow</li>
                <li><strong>Verde</strong> — Green</li>
                <li><strong>Negro</strong> — Black</li>
                <li><strong>Blanco</strong> — White</li>
              </ul>
            `
          },
          {
            id: "sp-numbers",
            title: "Numbers · Números 1–10",
            summary: "Uno, dos, tres…",
            keywords: ["numbers", "uno", "dos", "tres", "diez"],
            body: `
              <p>1 uno · 2 dos · 3 tres · 4 cuatro · 5 cinco · 6 seis · 7 siete · 8 ocho · 9 nueve · 10 diez</p>
            `
          }
        ]
      },
      2: {
        label: "Elementary",
        ages: "Ages 7–10",
        lessons: [
          {
            id: "sp-family",
            title: "Family · La familia",
            summary: "Mother, father, brother, sister.",
            keywords: ["family", "madre", "padre", "hermano"],
            body: `
              <ul>
                <li><strong>Madre</strong> — Mother</li>
                <li><strong>Padre</strong> — Father</li>
                <li><strong>Hermano/a</strong> — Brother / Sister</li>
                <li><strong>Abuelo/a</strong> — Grandfather / Grandmother</li>
                <li><strong>Tío/a</strong> — Uncle / Aunt</li>
              </ul>
            `
          },
          {
            id: "sp-animals",
            title: "Animals · Animales",
            summary: "Common animals in Spanish.",
            keywords: ["animals", "perro", "gato"],
            body: `
              <ul>
                <li>perro — dog 🐶</li>
                <li>gato — cat 🐱</li>
                <li>pájaro — bird 🐦</li>
                <li>caballo — horse 🐴</li>
                <li>pez — fish 🐟</li>
              </ul>
            `
          }
        ]
      },
      3: {
        label: "Middle / Parent Refresher",
        ages: "Ages 11+",
        lessons: [
          {
            id: "sp-ser-estar",
            title: "Ser vs. Estar",
            summary: "Two ways to say 'to be'.",
            keywords: ["ser", "estar", "to be", "verbs"],
            body: `
              <p>Spanish has two verbs for "to be":</p>
              <ul>
                <li><strong>Ser</strong> — permanent traits, identity, time. <em>Soy maestro.</em> (I am a teacher.)</li>
                <li><strong>Estar</strong> — temporary states, location. <em>Estoy cansado.</em> (I am tired.)</li>
              </ul>
            `
          },
          {
            id: "sp-present-tense",
            title: "Present Tense -ar Verbs",
            summary: "Conjugating regular -ar verbs.",
            keywords: ["conjugation", "ar verbs", "present tense"],
            body: `
              <p>Take the verb stem (drop -ar) and add endings.</p>
              <p>Example: hablar → habl-</p>
              <ul>
                <li>yo habl<strong>o</strong></li>
                <li>tú habl<strong>as</strong></li>
                <li>él/ella habl<strong>a</strong></li>
                <li>nosotros habl<strong>amos</strong></li>
                <li>vosotros habl<strong>áis</strong></li>
                <li>ellos habl<strong>an</strong></li>
              </ul>
            `
          }
        ]
      }
    }
  }
};

// Searchable index built from CURRICULUM.
window.LESSON_INDEX = (function () {
  const out = [];
  for (const [subjectKey, subject] of Object.entries(window.CURRICULUM)) {
    for (const [tierKey, tier] of Object.entries(subject.tiers)) {
      for (const lesson of tier.lessons) {
        out.push({
          subject: subjectKey,
          subjectLabel: subject.label,
          tier: Number(tierKey),
          tierLabel: tier.label,
          ages: tier.ages,
          id: lesson.id,
          title: lesson.title,
          summary: lesson.summary,
          keywords: lesson.keywords || []
        });
      }
    }
  }
  return out;
})();

window.GAME_CATALOG = [
  { id: "math-add",    subject: "math",      title: "Addition Sprint",       desc: "Quick-fire addition for ages 5+.", icon: "➕" },
  { id: "math-mult",   subject: "math",      title: "Times Table Quiz",      desc: "Multiplication facts up to 12×12.", icon: "✖️" },
  { id: "phon-letter", subject: "phonics",   title: "Letter Sound Match",    desc: "Match letters to the words they start.", icon: "🔤" },
  { id: "spa-vocab",   subject: "spanish",   title: "Spanish Word Match",    desc: "Match Spanish words to their English meaning.", icon: "🌮" },
  { id: "eng-pos",     subject: "english",   title: "Parts of Speech",       desc: "Tag the underlined word.", icon: "📝" },
  { id: "lit-genre",   subject: "literature", title: "Guess the Genre",      desc: "Identify a story's genre.", icon: "📖" }
];
