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
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>What does counting mean?</h3>
                <p>Counting tells us <strong>how many</strong> things there are. We point at each thing one time and say a number that gets bigger.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔢</span>Say each number out loud — tap 🔊 to hear it</h3>
                <ul class="key-list">
                  <li><span class="say" data-rate="0.7">one</span> 1 · 🍎</li>
                  <li><span class="say" data-rate="0.7">two</span> 2 · 🍎🍎</li>
                  <li><span class="say" data-rate="0.7">three</span> 3 · 🍎🍎🍎</li>
                  <li><span class="say" data-rate="0.7">four</span> 4 · 🍎🍎🍎🍎</li>
                  <li><span class="say" data-rate="0.7">five</span> 5 · 🍎🍎🍎🍎🍎</li>
                  <li><span class="say" data-rate="0.7">six</span> 6</li>
                  <li><span class="say" data-rate="0.7">seven</span> 7</li>
                  <li><span class="say" data-rate="0.7">eight</span> 8</li>
                  <li><span class="say" data-rate="0.7">nine</span> 9</li>
                  <li><span class="say" data-rate="0.7">ten</span> 10</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Try it with your hands</h3>
                <p>Hold up your fingers one at a time and say each number. When you have all five fingers up, that's <strong>5</strong>! Use both hands to reach <strong>10</strong>.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Watch out for</h3>
                <p>Don't skip numbers! Each thing gets one number. Touch each thing as you say its number.</p>
              </section>
            `,
            practice: [
              { q: "How many apples? 🍎🍎🍎🍎", options: ["3", "4", "5"], correct: "4", explain: "Count: one, two, three, four." },
              { q: "What number comes after 7?", options: ["6", "8", "9"], correct: "8" },
              { q: "Which number is the biggest?", options: ["2", "9", "5"], correct: "9" }
            ]
          },
          {
            id: "math-shapes",
            title: "Shapes Around Us",
            summary: "Circles, squares, triangles, and rectangles.",
            keywords: ["shapes", "circle", "square", "triangle", "rectangle"],
            body: `
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>Why shapes matter</h3>
                <p>Every object has a shape. Knowing shapes helps us describe things and notice patterns. Tap 🔊 next to each name to hear it.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔑</span>Four important shapes</h3>
                <ul class="key-list">
                  <li>⚪ <strong><span class="say">circle</span></strong> — round, no corners. Like a wheel or the sun.</li>
                  <li>🟦 <strong><span class="say">square</span></strong> — 4 sides that are all the same length.</li>
                  <li>🔺 <strong><span class="say">triangle</span></strong> — exactly 3 sides and 3 corners.</li>
                  <li>▭ <strong><span class="say">rectangle</span></strong> — 4 sides, but two are long and two are short.</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Look around</h3>
                <p>Can you find each shape in your room? A clock is often a <span class="say">circle</span>. A book is a <span class="say">rectangle</span>. A slice of pizza is a <span class="say">triangle</span>!</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Watch out for</h3>
                <p>A square is a special rectangle where ALL sides match. If two sides are longer than the others, it's a rectangle, not a square.</p>
              </section>
            `,
            practice: [
              { q: "How many sides does a triangle have?", options: ["2", "3", "4"], correct: "3" },
              { q: "Which shape is round with no corners?", options: ["square", "circle", "triangle"], correct: "circle" },
              { q: "A door is shaped like a…", options: ["rectangle", "circle", "triangle"], correct: "rectangle", explain: "It has two long sides and two short sides." }
            ]
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
            keywords: ["fraction", "half", "quarter", "third", "denominator", "numerator"],
            body: `
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>What is a fraction?</h3>
                <p>A <strong><span class="say">fraction</span></strong> shows a part of something whole — like a slice of pizza 🍕 or a piece of a chocolate bar 🍫. The whole has been split into <em>equal</em> parts.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔑</span>Two parts of every fraction</h3>
                <ul class="key-list">
                  <li><strong><span class="say">numerator</span></strong> — the <em>top</em> number. It tells you how many parts you HAVE.</li>
                  <li><strong><span class="say">denominator</span></strong> — the <em>bottom</em> number. It tells you how many EQUAL parts the whole is split into.</li>
                </ul>
                <p>Memory trick: <em>D</em>enominator is <em>D</em>own.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Common fractions, in pictures</h3>
                <ul>
                  <li><strong>1/2</strong> — a pizza cut into 2 equal slices, you have 1 slice. Half!</li>
                  <li><strong>1/4</strong> — a pizza cut into 4 equal slices, you have 1 slice. A quarter.</li>
                  <li><strong>3/4</strong> — same pizza, you have 3 of the 4 slices.</li>
                </ul>
                <p>Reading: 3/4 is read as <span class="say">three-fourths</span>.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Watch out for</h3>
                <p>The pieces have to be the SAME size to be a fraction. If you cut a pizza into one big slice and three tiny ones, those tiny ones are not "fourths" — they aren't equal!</p>
              </section>
            `,
            practice: [
              { q: "In the fraction 2/5, what is the numerator?", options: ["2", "5", "7"], correct: "2", explain: "Numerator is the top number." },
              { q: "Which is bigger: 1/2 or 1/4?", options: ["1/2", "1/4", "they're equal"], correct: "1/2", explain: "Cutting a whole into fewer pieces means each piece is bigger." },
              { q: "A pizza is cut into 8 equal slices and you eat 3. What fraction did you eat?", options: ["3/8", "8/3", "1/3"], correct: "3/8" }
            ]
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
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>What's the big idea?</h3>
                <p>An <strong><span class="say">equation</span></strong> is a balanced scale. Whatever sits on the left of the "=" sign equals what sits on the right. Solving for <em>x</em> means finding the number that keeps the scale balanced.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔑</span>Three rules to remember</h3>
                <ul class="key-list">
                  <li>1️⃣ Whatever you do to one side, you MUST do to the other.</li>
                  <li>2️⃣ Undo operations in reverse order: addition/subtraction first, then multiplication/division.</li>
                  <li>3️⃣ Your goal is to leave <em>x</em> alone on one side.</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Worked example</h3>
                <p>Solve: <strong>2x + 3 = 11</strong></p>
                <ol>
                  <li>Subtract 3 from both sides → 2x = 8</li>
                  <li>Divide both sides by 2 → x = <strong>4</strong></li>
                </ol>
                <p>Check: 2(4) + 3 = 8 + 3 = 11 ✅</p>
                <p>Always plug your answer back in to verify.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Common mistakes</h3>
                <ul>
                  <li>Forgetting to do the same step on BOTH sides.</li>
                  <li>Dividing before getting the variable term alone.</li>
                  <li>Dropping a negative sign — write it out, don't do it in your head.</li>
                </ul>
              </section>
            `,
            practice: [
              { q: "Solve: x + 7 = 12", options: ["3", "5", "19"], correct: "5", explain: "Subtract 7 from both sides." },
              { q: "Solve: 3x = 21", options: ["7", "18", "24"], correct: "7", explain: "Divide both sides by 3." },
              { q: "Solve: 2x − 5 = 9", options: ["2", "7", "14"], correct: "7", explain: "Add 5 to both sides → 2x = 14, then divide by 2." }
            ]
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
          },
          {
            id: "math-angles",
            title: "Geometry: Angles",
            summary: "Acute, right, obtuse, and straight angles.",
            keywords: ["angle", "acute", "right", "obtuse", "geometry", "degrees"],
            body: `
              <p>An angle is measured in <strong>degrees (°)</strong>.</p>
              <ul>
                <li><strong>Acute</strong> — less than 90° (sharp corner)</li>
                <li><strong>Right</strong> — exactly 90° (square corner) ⌐</li>
                <li><strong>Obtuse</strong> — between 90° and 180° (wide)</li>
                <li><strong>Straight</strong> — exactly 180° (a flat line)</li>
              </ul>
              <p>The three angles inside a triangle always add up to <strong>180°</strong>.</p>
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
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>Stories have three parts</h3>
                <p>Every story has a <strong><span class="say">beginning</span></strong>, a <strong><span class="say">middle</span></strong>, and an <strong><span class="say">end</span></strong>. Knowing this helps you understand and remember stories.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔑</span>What happens in each part?</h3>
                <ul class="key-list">
                  <li><strong>Beginning</strong> — we meet the <span class="say">characters</span> and learn where they are. Often the story tells us about a problem.</li>
                  <li><strong>Middle</strong> — something happens. The characters try to fix the problem.</li>
                  <li><strong>End</strong> — the problem is solved. We learn what happened.</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Example: The Three Little Pigs</h3>
                <ul>
                  <li><strong>Beginning:</strong> Three pigs leave home and each builds a house.</li>
                  <li><strong>Middle:</strong> A wolf blows down two houses!</li>
                  <li><strong>End:</strong> The third pig's brick house keeps everyone safe.</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Try this</h3>
                <p>Pick your favorite bedtime story. Tell it in just three sentences — one for each part!</p>
              </section>
            `,
            practice: [
              { q: "In which part of a story do we MEET the characters?", options: ["Beginning", "Middle", "End"], correct: "Beginning" },
              { q: "Where is the problem usually SOLVED?", options: ["Beginning", "Middle", "End"], correct: "End" },
              { q: "What word means the people or animals in a story?", options: ["Setting", "Characters", "Plot"], correct: "Characters" }
            ]
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
          },
          {
            id: "lit-comprehension",
            title: "Reading Comprehension Practice",
            summary: "Read a short passage and find the main idea.",
            keywords: ["comprehension", "passage", "main idea", "reading"],
            body: `
              <h3>Passage: The Lost Kite</h3>
              <p>Maya took her bright red kite to the park on a windy Saturday. The wind tugged hard on the string, and the kite climbed into the blue sky. Suddenly the string snapped! Maya ran after the kite, but it floated up into a tall tree. A kind neighbor brought a long ladder and helped her get it down.</p>
              <h3>Questions</h3>
              <ol>
                <li>Where did Maya take her kite?<br/><em>Answer: the park</em></li>
                <li>Why did the kite get away?<br/><em>Answer: the string snapped</em></li>
                <li>Who helped Maya?<br/><em>Answer: a kind neighbor</em></li>
              </ol>
              <p><strong>Main idea:</strong> Even when something goes wrong, a helpful neighbor can save the day.</p>
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
            keywords: ["metaphor", "simile", "irony", "foreshadowing", "personification"],
            body: `
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>Why writers use these</h3>
                <p>Literary devices are tools authors use to make writing more vivid, memorable, and emotional. Spotting them helps you understand what the author wants you to feel.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔑</span>Five devices to know</h3>
                <ul class="key-list">
                  <li><strong><span class="say">simile</span></strong> — compares two things using <em>like</em> or <em>as</em>. <em>"As brave as a lion."</em></li>
                  <li><strong><span class="say">metaphor</span></strong> — calls one thing another, with no "like." <em>"Time is a thief."</em></li>
                  <li><strong><span class="say">personification</span></strong> — gives human traits to non-human things. <em>"The wind whispered."</em></li>
                  <li><strong><span class="say">foreshadowing</span></strong> — hints early in the story about what will happen later.</li>
                  <li><strong><span class="say">irony</span></strong> — the outcome is the opposite of what we expect. A fire station burns down.</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Spot the device</h3>
                <ol>
                  <li><em>"Her smile was the sun."</em> → metaphor</li>
                  <li><em>"He ran like the wind."</em> → simile</li>
                  <li><em>"The angry clouds gathered."</em> → personification</li>
                </ol>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Tell similes from metaphors</h3>
                <p>Look for the words <strong>like</strong> or <strong>as</strong> — that's a simile. No "like" or "as"? It's a metaphor.</p>
              </section>
            `,
            practice: [
              { q: "Identify: \"He was as quiet as a mouse.\"", options: ["Simile", "Metaphor", "Irony"], correct: "Simile", explain: "Uses 'as'." },
              { q: "Identify: \"The classroom was a zoo today.\"", options: ["Metaphor", "Simile", "Foreshadowing"], correct: "Metaphor" },
              { q: "Identify: \"The leaves danced in the breeze.\"", options: ["Personification", "Irony", "Metaphor"], correct: "Personification" },
              { q: "When the outcome is the opposite of what we expect, that's…", options: ["Foreshadowing", "Irony", "Simile"], correct: "Irony" }
            ]
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
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>What is a vowel?</h3>
                <p>A <strong><span class="say">vowel</span></strong> is a special letter that makes a smooth, open sound. Every word needs a vowel. There are five main vowels: <strong>A, E, I, O, U</strong>.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔊</span>Short vowel sounds — tap each one</h3>
                <p>Tap 🔊 to hear each sound, then tap the example word:</p>
                <ul class="key-list">
                  <li><strong>A</strong> — <span class="say" data-say="ah" data-rate="0.6">ah</span> — like in <span class="say" data-rate="0.7">cat</span> 🐱</li>
                  <li><strong>E</strong> — <span class="say" data-say="eh" data-rate="0.6">eh</span> — like in <span class="say" data-rate="0.7">bed</span> 🛏️</li>
                  <li><strong>I</strong> — <span class="say" data-say="ih" data-rate="0.6">ih</span> — like in <span class="say" data-rate="0.7">sit</span> 💺</li>
                  <li><strong>O</strong> — <span class="say" data-say="ah" data-rate="0.6">ah</span> — like in <span class="say" data-rate="0.7">hot</span> 🔥</li>
                  <li><strong>U</strong> — <span class="say" data-say="uh" data-rate="0.6">uh</span> — like in <span class="say" data-rate="0.7">sun</span> ☀️</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Sound it out</h3>
                <p>To read a small word, say each letter sound and slide them together:</p>
                <p style="font-size:22px;text-align:center;">c – a – t → <span class="say" data-rate="0.7">cat</span></p>
                <p style="font-size:22px;text-align:center;">b – e – d → <span class="say" data-rate="0.7">bed</span></p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Listen carefully</h3>
                <p>The "ah" in <em>cat</em> is short. A long A would say its name "ay" — like in <em>cake</em>. We'll learn long vowels later!</p>
              </section>
            `,
            practice: [
              { q: "Which word has the short A sound?", options: ["cake", "cat", "key"], correct: "cat" },
              { q: "What sound does the I in 'sit' make?", options: ["ih", "eye", "ee"], correct: "ih" },
              { q: "Which word has the short U sound?", options: ["use", "sun", "soon"], correct: "sun" }
            ]
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
          },
          {
            id: "phon-blends",
            title: "Beginning Blends",
            summary: "Two consonant sounds you blend together.",
            keywords: ["blends", "bl", "st", "tr", "consonant blends"],
            body: `
              <p>A blend is two consonants whose sounds blend together — you still hear both!</p>
              <ul>
                <li><strong>bl</strong> — <em>blue, black, blanket</em></li>
                <li><strong>st</strong> — <em>star, stop, stick</em></li>
                <li><strong>tr</strong> — <em>tree, train, truck</em></li>
                <li><strong>fl</strong> — <em>flag, flower, fly</em></li>
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
            id: "phon-digraphs",
            title: "Digraphs (sh, ch, th)",
            summary: "Two letters that make one sound.",
            keywords: ["digraph", "sh", "ch", "th"],
            body: `
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>What's a digraph?</h3>
                <p>A <strong><span class="say">digraph</span></strong> is when two letters team up to make ONE sound. You don't hear the letters by themselves — they make a brand-new sound together.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔊</span>Three common digraphs</h3>
                <ul class="key-list">
                  <li><strong>sh</strong> — quiet sound, like a teacher saying "shhh" — <span class="say" data-rate="0.7">ship</span>, <span class="say" data-rate="0.7">shop</span>, <span class="say" data-rate="0.7">fish</span></li>
                  <li><strong>ch</strong> — like a tiny train: ch-ch-ch — <span class="say" data-rate="0.7">chin</span>, <span class="say" data-rate="0.7">chip</span>, <span class="say" data-rate="0.7">lunch</span></li>
                  <li><strong>th</strong> — tongue between your teeth — <span class="say" data-rate="0.7">thumb</span>, <span class="say" data-rate="0.7">thin</span>, <span class="say" data-rate="0.7">bath</span></li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>How to spot one</h3>
                <p>Look for these letter pairs at the start, middle, or end of a word. The pair stays together — don't try to sound them out one at a time.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Watch out for</h3>
                <p><strong>th</strong> has two flavors: a soft one (<em>thumb</em>) and a buzzy one (<em>this</em>). Both use the tongue-between-teeth trick.</p>
              </section>
            `,
            practice: [
              { q: "Which word starts with the 'sh' digraph?", options: ["sit", "ship", "spin"], correct: "ship" },
              { q: "What sound do the letters 'ch' make in 'chip'?", options: ["k", "ch (like a train)", "sh"], correct: "ch (like a train)" },
              { q: "Which word ends with a digraph?", options: ["bath", "ball", "bag"], correct: "bath", explain: "'th' is a digraph." }
            ]
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
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>What is a noun?</h3>
                <p>A <strong><span class="say">noun</span></strong> is a naming word. It names a <em>person</em>, a <em>place</em>, an <em>animal</em>, or a <em>thing</em>.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔑</span>Four kinds of nouns — with examples</h3>
                <ul class="key-list">
                  <li>👩‍🏫 <strong>Person</strong> — <span class="say">teacher</span>, <span class="say">mom</span>, <span class="say">friend</span></li>
                  <li>🏞️ <strong>Place</strong> — <span class="say">park</span>, <span class="say">school</span>, <span class="say">kitchen</span></li>
                  <li>🐶 <strong>Animal</strong> — <span class="say">dog</span>, <span class="say">cat</span>, <span class="say">bird</span></li>
                  <li>🏀 <strong>Thing</strong> — <span class="say">ball</span>, <span class="say">cup</span>, <span class="say">book</span></li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Spot the noun</h3>
                <p>In the sentence <em>"The dog runs in the park"</em>, there are two nouns: <strong>dog</strong> (animal) and <strong>park</strong> (place).</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Noun trick</h3>
                <p>If you can put "the" or "a" in front of a word, it's probably a noun: <em>the cup</em>, <em>a dog</em>, <em>the park</em>.</p>
              </section>
            `,
            practice: [
              { q: "Which word is a noun?", options: ["run", "happy", "school"], correct: "school" },
              { q: "Find the noun: 'My cat sleeps a lot.'", options: ["my", "cat", "sleeps"], correct: "cat" },
              { q: "Which is NOT a noun?", options: ["teacher", "park", "jump"], correct: "jump", explain: "'Jump' is an action, not a name." }
            ]
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
          },
          {
            id: "eng-capitalization",
            title: "Capitalization Rules",
            summary: "When to use a capital letter.",
            keywords: ["capital", "uppercase", "proper noun"],
            body: `
              <p>Use a capital letter for:</p>
              <ul>
                <li>The first word of a sentence.</li>
                <li>The pronoun <strong>I</strong>.</li>
                <li>Names of people, places, days, and months: <em>Maria, Texas, Monday, July</em>.</li>
                <li>Titles of books and movies: <em>Charlotte's Web</em>.</li>
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
            id: "eng-parts-speech",
            title: "Eight Parts of Speech",
            summary: "Noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection.",
            keywords: ["parts of speech", "grammar", "adverb", "preposition"],
            body: `
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>Why this matters</h3>
                <p>Every word in English does a job. Knowing those jobs is the foundation of writing clearly, fixing run-ons, and understanding harder grammar like clauses and tenses.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔑</span>The eight jobs — with what each does</h3>
                <ul class="key-list">
                  <li><strong><span class="say">noun</span></strong> — names a person, place, animal, or thing. <em>teacher, city, dog, book</em></li>
                  <li><strong><span class="say">pronoun</span></strong> — stands in for a noun. <em>he, she, it, they, we</em></li>
                  <li><strong><span class="say">verb</span></strong> — shows action or a state of being. <em>run, eat, is, become</em></li>
                  <li><strong><span class="say">adjective</span></strong> — describes a noun. <em>red, tall, happy</em></li>
                  <li><strong><span class="say">adverb</span></strong> — describes a verb, adjective, or other adverb (often ends -ly). <em>quickly, very, well</em></li>
                  <li><strong><span class="say">preposition</span></strong> — shows position or relationship. <em>on, under, between, before</em></li>
                  <li><strong><span class="say">conjunction</span></strong> — joins words or clauses. <em>and, but, or, because</em></li>
                  <li><strong><span class="say">interjection</span></strong> — short word showing feeling. <em>Wow! Ouch! Yay!</em></li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Tag the sentence</h3>
                <p>"The <em>quick</em> brown <em>dog</em> <em>quietly</em> jumps <em>over</em> the lazy <em>cat</em>."</p>
                <ul>
                  <li><em>quick</em> — adjective (describes "dog")</li>
                  <li><em>dog</em>, <em>cat</em> — nouns</li>
                  <li><em>quietly</em> — adverb (describes "jumps")</li>
                  <li><em>over</em> — preposition (relationship)</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Tricky overlaps</h3>
                <p>The same word can play different roles depending on the sentence. <em>"Run"</em> is a verb in "I run", but a noun in "It was a great run."</p>
              </section>
            `,
            practice: [
              { q: "Identify: 'She quickly finished her homework.' — what is 'quickly'?", options: ["Verb", "Adverb", "Adjective"], correct: "Adverb" },
              { q: "Identify: 'The book is on the table.' — what is 'on'?", options: ["Preposition", "Conjunction", "Pronoun"], correct: "Preposition" },
              { q: "Pick the conjunction.", options: ["and", "tall", "happily"], correct: "and" },
              { q: "Identify: 'They are tired.' — what is 'They'?", options: ["Noun", "Pronoun", "Adverb"], correct: "Pronoun" }
            ]
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
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>Why greetings come first</h3>
                <p>Greetings are the polite words you use when you meet someone or want to be kind. In Spanish-speaking countries, people greet often, and saying <em>por favor</em> and <em>gracias</em> shows respect.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔊</span>Tap each phrase to hear it in Spanish</h3>
                <ul class="key-list">
                  <li><strong><span class="say" data-lang="es-ES" data-rate="0.7">Hola</span></strong> — Hello (OH-lah)</li>
                  <li><strong><span class="say" data-lang="es-ES" data-rate="0.7">Adiós</span></strong> — Goodbye (ah-DYOHS)</li>
                  <li><strong><span class="say" data-lang="es-ES" data-rate="0.7">Por favor</span></strong> — Please (por fah-VOR)</li>
                  <li><strong><span class="say" data-lang="es-ES" data-rate="0.7">Gracias</span></strong> — Thank you (GRAH-syahs)</li>
                  <li><strong><span class="say" data-lang="es-ES" data-rate="0.7">De nada</span></strong> — You're welcome (deh NAH-dah)</li>
                  <li><strong><span class="say" data-lang="es-ES" data-rate="0.7">Buenos días</span></strong> — Good morning</li>
                  <li><strong><span class="say" data-lang="es-ES" data-rate="0.7">Buenas noches</span></strong> — Good night</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Tiny conversation</h3>
                <p>— <span class="say" data-lang="es-ES" data-rate="0.75">Hola, ¿cómo estás?</span> (Hi, how are you?)<br/>
                — <span class="say" data-lang="es-ES" data-rate="0.75">Bien, gracias.</span> (Good, thank you.)</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Pronunciation note</h3>
                <p>The <strong>H</strong> in <em>Hola</em> is silent — say "OH-lah", not "HO-lah". In Spanish, almost every H is silent.</p>
              </section>
            `,
            practice: [
              { q: "How do you say 'thank you' in Spanish?", options: ["Hola", "Gracias", "Adiós"], correct: "Gracias" },
              { q: "What does 'Adiós' mean?", options: ["Hello", "Goodbye", "Please"], correct: "Goodbye" },
              { q: "Pick the polite reply to 'Gracias'.", options: ["Hola", "De nada", "Por favor"], correct: "De nada", explain: "'You're welcome.'" }
            ]
          },
          {
            id: "sp-colors",
            title: "Colors · Colores",
            summary: "Rojo, azul, amarillo, verde…",
            keywords: ["colors", "rojo", "azul", "verde"],
            body: `
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>Naming colors in Spanish</h3>
                <p>In Spanish, colors usually come AFTER the noun: not "red car" but <em>"carro rojo"</em>. Tap 🔊 to hear each color slowly.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🎨</span>Color words</h3>
                <ul class="key-list">
                  <li>🔴 <strong><span class="say" data-lang="es-ES" data-rate="0.7">rojo</span></strong> — red</li>
                  <li>🔵 <strong><span class="say" data-lang="es-ES" data-rate="0.7">azul</span></strong> — blue</li>
                  <li>🟡 <strong><span class="say" data-lang="es-ES" data-rate="0.7">amarillo</span></strong> — yellow</li>
                  <li>🟢 <strong><span class="say" data-lang="es-ES" data-rate="0.7">verde</span></strong> — green</li>
                  <li>⚫ <strong><span class="say" data-lang="es-ES" data-rate="0.7">negro</span></strong> — black</li>
                  <li>⚪ <strong><span class="say" data-lang="es-ES" data-rate="0.7">blanco</span></strong> — white</li>
                  <li>🟠 <strong><span class="say" data-lang="es-ES" data-rate="0.7">naranja</span></strong> — orange</li>
                  <li>🟣 <strong><span class="say" data-lang="es-ES" data-rate="0.7">morado</span></strong> — purple</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Use it in a sentence</h3>
                <p>"<span class="say" data-lang="es-ES" data-rate="0.75">El sol es amarillo.</span>" — The sun is yellow.<br/>
                "<span class="say" data-lang="es-ES" data-rate="0.75">Mi camisa es azul.</span>" — My shirt is blue.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Tricky letters</h3>
                <p>The double-L in <em>amarillo</em> sounds like a "Y" — say "ah-mah-REE-yoh".</p>
              </section>
            `,
            practice: [
              { q: "What color is 'rojo'?", options: ["Red", "Blue", "Green"], correct: "Red" },
              { q: "How do you say 'green' in Spanish?", options: ["azul", "verde", "blanco"], correct: "verde" },
              { q: "How do you say 'yellow shirt'? (Spanish word order!)", options: ["amarillo camisa", "camisa amarillo", "camisa amarilla"], correct: "camisa amarilla", explain: "Color comes after the noun, and 'camisa' is feminine so it ends in -a." }
            ]
          },
          {
            id: "sp-numbers",
            title: "Numbers · Números 1–10",
            summary: "Uno, dos, tres…",
            keywords: ["numbers", "uno", "dos", "tres", "diez"],
            body: `
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>Counting in Spanish</h3>
                <p>Counting in Spanish sounds beautiful and is very useful — for prices, ages, phone numbers, and time.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔊</span>Tap each number to hear it</h3>
                <ul class="key-list">
                  <li>1 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">uno</span></strong> (OO-noh)</li>
                  <li>2 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">dos</span></strong> (dohs)</li>
                  <li>3 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">tres</span></strong> (trehs)</li>
                  <li>4 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">cuatro</span></strong> (KWAH-troh)</li>
                  <li>5 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">cinco</span></strong> (SEEN-koh)</li>
                  <li>6 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">seis</span></strong> (sayss)</li>
                  <li>7 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">siete</span></strong> (SYEH-teh)</li>
                  <li>8 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">ocho</span></strong> (OH-choh)</li>
                  <li>9 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">nueve</span></strong> (NWEH-veh)</li>
                  <li>10 — <strong><span class="say" data-lang="es-ES" data-rate="0.65">diez</span></strong> (dyess)</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Tell your age</h3>
                <p>"<span class="say" data-lang="es-ES" data-rate="0.75">Tengo siete años.</span>" — I am seven years old.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Tricky numbers</h3>
                <p><em>Cinco</em> uses a soft "S" sound for the C. <em>Cuatro</em> blends KW together at the start.</p>
              </section>
            `,
            practice: [
              { q: "How do you say '3' in Spanish?", options: ["dos", "tres", "siete"], correct: "tres" },
              { q: "Which number is 'ocho'?", options: ["6", "8", "10"], correct: "8" },
              { q: "What comes after 'cuatro'?", options: ["cinco", "tres", "seis"], correct: "cinco" }
            ]
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
              <section class="lesson-section">
                <h3><span class="section-icon">🧠</span>Two verbs, same English meaning</h3>
                <p>English has one verb "to be." Spanish has two: <strong><span class="say" data-lang="es-ES" data-rate="0.75">ser</span></strong> and <strong><span class="say" data-lang="es-ES" data-rate="0.75">estar</span></strong>. Choosing the right one changes your meaning, so it's worth understanding well.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">🔑</span>The DOCTOR / PLACE trick</h3>
                <p>Use <strong>SER</strong> for things that don't change easily — remember <em>DOCTOR</em>: <strong>D</strong>escription, <strong>O</strong>ccupation, <strong>C</strong>haracteristic, <strong>T</strong>ime, <strong>O</strong>rigin, <strong>R</strong>elationship.</p>
                <p>Use <strong>ESTAR</strong> for things that can change — remember <em>PLACE</em>: <strong>P</strong>osition, <strong>L</strong>ocation, <strong>A</strong>ction (right now), <strong>C</strong>ondition, <strong>E</strong>motion.</p>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">💡</span>Compare</h3>
                <ul class="key-list">
                  <li><span class="say" data-lang="es-ES" data-rate="0.8">Soy alta.</span> — I am tall. (lasting trait → ser)</li>
                  <li><span class="say" data-lang="es-ES" data-rate="0.8">Estoy cansada.</span> — I am tired. (right now → estar)</li>
                  <li><span class="say" data-lang="es-ES" data-rate="0.8">Es médico.</span> — He is a doctor. (occupation → ser)</li>
                  <li><span class="say" data-lang="es-ES" data-rate="0.8">Está en la cocina.</span> — She is in the kitchen. (location → estar)</li>
                </ul>
              </section>
              <section class="lesson-section">
                <h3><span class="section-icon">⚠️</span>Same word, different meaning</h3>
                <p><em>Es aburrido</em> = "He is boring" (his personality). <br/> <em>Está aburrido</em> = "He is bored" (right now). Picking the wrong verb changes the message!</p>
              </section>
            `,
            practice: [
              { q: "Choose: 'Maria ___ doctora.'", options: ["es", "está"], correct: "es", explain: "Occupation → ser." },
              { q: "Choose: 'El libro ___ en la mesa.'", options: ["es", "está"], correct: "está", explain: "Location → estar." },
              { q: "Choose: '___ cansado hoy.' (I'm tired today)", options: ["Soy", "Estoy"], correct: "Estoy", explain: "Temporary feeling → estar." },
              { q: "Choose: 'Ellos ___ de México.'", options: ["son", "están"], correct: "son", explain: "Origin → ser." }
            ]
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
          },
          {
            id: "sp-preterite",
            title: "Past Tense (Preterite) -ar Verbs",
            summary: "Talk about completed actions in the past.",
            keywords: ["past tense", "preterite", "pretérito", "ar verbs"],
            body: `
              <p>The preterite tense describes actions that already finished. For regular -ar verbs, drop -ar and add these endings:</p>
              <p>Example: hablar → habl-</p>
              <ul>
                <li>yo habl<strong>é</strong> — I spoke</li>
                <li>tú habl<strong>aste</strong> — you spoke</li>
                <li>él/ella habl<strong>ó</strong> — he/she spoke</li>
                <li>nosotros habl<strong>amos</strong> — we spoke</li>
                <li>vosotros habl<strong>asteis</strong> — you all spoke</li>
                <li>ellos habl<strong>aron</strong> — they spoke</li>
              </ul>
              <p>Listen for the accent mark on <em>hablé</em> and <em>habló</em> — it changes the meaning!</p>
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
  { id: "math-pizza",  subject: "math",      title: "Fraction Pizza",        desc: "Click pizza slices to make the target fraction.", icon: "🍕" },
  { id: "phon-letter", subject: "phonics",   title: "Letter Sound Match",    desc: "Match letters to the words they start.", icon: "🔤" },
  { id: "spell-jumble",subject: "phonics",   title: "Spell Jumble",          desc: "Click letters in order to spell the word.", icon: "🧩" },
  { id: "spa-vocab",   subject: "spanish",   title: "Spanish Word Match",    desc: "Match Spanish words to their English meaning.", icon: "🌮" },
  { id: "mem-match",   subject: "spanish",   title: "Memory Match",          desc: "Flip cards to match Spanish & English pairs.", icon: "🧠" },
  { id: "eng-pos",     subject: "english",   title: "Parts of Speech",       desc: "Tag the underlined word.", icon: "📝" },
  { id: "lit-genre",   subject: "literature", title: "Guess the Genre",      desc: "Identify a story's genre.", icon: "📖" }
];
