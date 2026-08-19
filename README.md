# Niranjan Learning Hub

## Chapters currently in the site

- **Science → Chapter 3: The Skeletal and Muscular Systems**
  (`js/data/chapters/science-skeletal-muscular-systems.js`)
- **Science → Chapter 4: Good Health**
  (`js/data/chapters/science-good-health.js`)
- **Social Studies/EVS → Chapter 5: Continents and Oceans**
  (`js/data/chapters/social-continents-oceans.js`)

Every other subject still shows "coming soon" until a chapter is added.

## Installable app (PWA)

This site is a Progressive Web App. Deploy the **whole folder** (not just
`index.html`) to a real HTTPS host and visitors can tap **"Add to Home
Screen"** (Android/iPhone) to install it like an app — full-screen, its
own icon, and it keeps working offline after the first visit.

This only works on the real live deployment, not a local file preview or
a single-file-artifact preview — service workers require the site to be
served over HTTPS from its real domain.

- `manifest.json` — app name, icons, colours
- `sw.js` — offline caching (regenerate with `gen_sw.py` if the file list changes)
- `assets/icons/` — app icons in the site's brand colours

## Running it

No build step. Open `index.html` in a browser, or upload the whole
folder to any static host (Netlify drag-and-drop, GitHub Pages, etc.).

## File map

```
index.html                        page shell + the three views (home / chapter list / chapter hub)
css/style.css                     all styling
js/data/subjects.js               the 5 subjects — the only place subjects are defined
js/data/chapter-schema.js         documents the exact shape a chapter object must follow (no sample content)
js/data/chapters/                 one file per chapter goes here once content is ready
js/app.js                         navigation + rendering + the quiz/flashcard engines (shared by every chapter)
```

## Adding a chapter

1. Tell me the exact textbook and chapter — I'll generate accurate,
   textbook-based notes, MCQs, flashcards, image questions, scenarios,
   and resource links for it.
2. That content becomes one file in `js/data/chapters/`, following the
   shape in `js/data/chapter-schema.js`, e.g.:

   ```js
   SUBJECTS.find(s => s.id === 'science').chapters.push({
     id: 'skeletal-muscular-systems',
     chapterNumber: 3,   // optional — shown as "Chapter N" on the card, breadcrumb and heading
     title: 'The Skeletal and Muscular Systems',
     notes: [ /* ... */ ],
     mcqs: [ /* ... */ ],
     flashcards: [ /* ... */ ],
     imageQuestions: [ /* ... */ ],
     scenarios: [ /* ... */ ],
     videos: [ /* ... */ ],
     links: [ /* ... */ ],
   });
   ```

3. Add one line in `index.html`, after the existing chapter files and just
   above `js/app.js` (new chapters always load after existing ones, so
   earlier chapters are never affected):

   ```html
   <script src="js/data/chapters/science-good-health.js"></script>
   ```

That's it — the homepage, chapter list, notes, test, flashcards, image
questions, scenarios and resources tabs all pick it up automatically.
No design or logic files need to change.

## What each chapter can hold (caps, not targets)

- Notes: as many labelled sections as the chapter needs
- MCQs: up to 50 (fewer if the chapter can't support 50 without repeating a concept)
- Flashcards: up to 30, each a distinct fact — no repeats
- Image-based questions: up to 15, each with an **original** illustration (no textbook copies, no logos/watermarks unless educationally essential), shown large
- Real-world scenarios: up to 15, each with an original illustration shown at about half size
- Videos & official links: as many as are genuinely useful

If a chapter can't support the full quantity without padding, I'll say
so and generate the maximum quantity that's actually high-quality.
