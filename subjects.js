/* =====================================================================
   SUBJECTS REGISTRY
   =====================================================================
   This is the ONLY place subjects are defined. The homepage, chapter
   list, and chapter hub all read from this array — nothing about the
   site's design needs to change when new subjects or chapters are added.

   Each subject object:
   {
     id:      string   — unique, used in URLs/state, no spaces
     name:    string   — shown to the student
     icon:    string   — a single emoji shown on the subject badge
     color:   string   — hex color used for the badge + accents
     chapters: []      — filled by chapter data files (see below)
   }

   HOW A CHAPTER GETS ADDED
   -------------------------------------------------------------------
   Chapter content (notes, MCQs, flashcards, image questions, scenarios,
   videos, links) lives in its own file under js/data/chapters/, e.g.
   js/data/chapters/science-skeletal-muscular.js

   That file pushes one chapter object into the right subject's
   `chapters` array. See js/data/chapter-schema.js for the exact shape
   every chapter object must follow.

   Once a chapter file exists, add one <script> line for it in
   index.html (just above js/app.js) — no other file needs to change.
===================================================================== */

const SUBJECTS = [
  { id: 'maths',    name: 'Mathematics',            icon: '🔢', color: '#4361EE', chapters: [] },
  { id: 'english',  name: 'English',                icon: '📖', color: '#B14AED', chapters: [] },
  { id: 'science',  name: 'Science',                icon: '🔬', color: '#06D6A0', chapters: [] },
  { id: 'social',   name: 'Social Studies / EVS',    icon: '🌍', color: '#FF8500', chapters: [] },
  { id: 'computer', name: 'Computer Science',        icon: '💻', color: '#FF4D6D', chapters: [] },
];
