/* =====================================================================
   CHAPTER DATA SCHEMA — read this before writing a chapter file.
   This file defines the shape only. It is never included in index.html
   and contains no sample content — it exists purely as documentation
   so a new chapter can be added without changing any site code.
   =====================================================================

   A chapter file (e.g. js/data/chapters/<subject>-<chapter-slug>.js)
   must build one object with this exact shape and push it into the
   right subject's chapters array from subjects.js:

   SUBJECTS.find(s => s.id === 'science').chapters.push({

     id:    string   — unique within the subject, no spaces
     chapterNumber: number (optional) — the textbook's chapter number;
                     when present, it's shown as "Chapter N" on the
                     chapter card, breadcrumb and chapter heading
     title: string   — chapter name shown to the student

     // ---- 1. NOTES ---------------------------------------------------
     // Clear, age-appropriate notes broken into short labelled sections.
     notes: [
       { heading: string, content: string }   // content: plain text or simple <p>/<ul> HTML
       // ... as many sections as the chapter needs
     ],

     // ---- 2. MCQs ------------------------------------------------------
     // Up to 50 per chapter. If the chapter cannot support 50 without
     // repeating a concept, use fewer and say so — never pad.
     mcqs: [
       {
         question: string,
         options: [string, string, string, string],  // exactly 4
         correctIndex: number,       // 0-3
         explanation: string         // why the answer is correct, in kid-friendly language
       }
     ],

     // ---- 3. FLASHCARDS -------------------------------------------------
     // Up to 30 per chapter, each a distinct fact/term/concept (no repeats).
     flashcards: [
       { front: string, back: string }
     ],

     // ---- 4. IMAGE-BASED QUESTIONS --------------------------------------
     // Up to 15. Each needs an ORIGINAL illustration (no textbook copies,
     // no logos/watermarks unless a label is educationally essential).
     // Shown LARGE in the UI (quiz-media.large).
     imageQuestions: [
       {
         imageUrl: string,           // path/URL to the original illustration
         imageAlt: string,           // short accessible description
         question: string,
         options: [string, string, string, string],
         correctIndex: number,
         explanation: string
       }
     ],

     // ---- 5. REAL-WORLD SCENARIOS ---------------------------------------
     // Up to 15. Each needs an ORIGINAL illustration, shown at roughly
     // half size in the UI (quiz-media.half).
     scenarios: [
       {
         imageUrl: string,
         imageAlt: string,
         scenarioText: string,       // the short real-world situation
         question: string,
         options: [string, string, string, string],
         correctIndex: number,
         explanation: string
       }
     ],

     // ---- 6. VIDEOS & OFFICIAL LINKS -------------------------------------
     videos: [
       { title: string, url: string }
     ],
     links: [
       { title: string, url: string }
     ]

   });

   NOTE ON THE SCORED TEST
   -------------------------------------------------------------------
   The "Test" tab in the chapter hub runs on the `mcqs` array directly —
   there is no separate test data structure. Previous / Next / Restart /
   Score and the question counter are all handled generically by
   js/app.js for any chapter, so nothing here needs to describe them.
===================================================================== */
