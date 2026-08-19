/* =====================================================================
   NIRANJAN LEARNING HUB — app shell
   Pure vanilla JS. Reads only from the SUBJECTS array (js/data/subjects.js
   + whatever chapter files are included). Nothing here needs to change
   when chapters are added later.
===================================================================== */

const TABS = [
  { id: 'notes',     label: 'Notes',            icon: '📝' },
  { id: 'test',      label: 'Test',             icon: '✅' },
  { id: 'flash',     label: 'Flashcards',       icon: '🃏' },
  { id: 'imageq',    label: 'Picture Questions',icon: '🖼️' },
  { id: 'scenario',  label: 'Real-Life',        icon: '🌟' },
  { id: 'resources', label: 'Videos & Links',   icon: '🔗' },
];

const state = {
  view: 'home',       // 'home' | 'chapters' | 'hub' | 'dashboard'
  subjectId: null,
  chapterId: null,
  tab: 'notes',
  quiz: null,          // active quiz-engine state, see makeQuizState()
  dashboardUnlocked: false,
};

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

function getSubject(id) { return SUBJECTS.find(s => s.id === id) || null; }
function getChapter(subjectId, chapterId) {
  const subj = getSubject(subjectId);
  return subj ? (subj.chapters.find(c => c.id === chapterId) || null) : null;
}

/* ---------------------------------------------------------------------
   NAVIGATION
--------------------------------------------------------------------- */
function goHome() {
  state.view = 'home'; state.subjectId = null; state.chapterId = null; state.quiz = null;
  render();
}
function goSubject(subjectId) {
  state.view = 'chapters'; state.subjectId = subjectId; state.chapterId = null; state.quiz = null;
  render();
}
function goChapter(subjectId, chapterId) {
  state.view = 'hub'; state.subjectId = subjectId; state.chapterId = chapterId; state.tab = 'notes'; state.quiz = null;
  render();
}
function goBack() {
  if (state.view === 'hub') goSubject(state.subjectId);
  else if (state.view === 'chapters') goHome();
  else if (state.view === 'dashboard') goHome();
}
function goDashboard() {
  state.view = 'dashboard'; state.subjectId = null; state.chapterId = null; state.quiz = null;
  render();
}

$('#homeLink').addEventListener('click', goHome);
$('#backBtn').addEventListener('click', goBack);
$('#parentDashLink').addEventListener('click', goDashboard);

/* ---------------------------------------------------------------------
   ROOT RENDER — shows/hides the three views
--------------------------------------------------------------------- */
function render() {
  $('#view-home').hidden = state.view !== 'home';
  $('#view-chapters').hidden = state.view !== 'chapters';
  $('#view-hub').hidden = state.view !== 'hub';
  $('#view-dashboard').hidden = state.view !== 'dashboard';
  $('#backBtn').hidden = state.view === 'home';

  // Maths gets QuizQuest's colourful game theme; every other subject
  // (and the home/dashboard screens) stays on the normal Learning Hub look.
  document.body.classList.toggle('theme-maths', state.subjectId === 'maths');

  if (state.view === 'home') renderHome();
  if (state.view === 'chapters') renderChapters();
  if (state.view === 'hub') renderHub();
  if (state.view === 'dashboard') renderDashboard();
}

/* ---------------------------------------------------------------------
   VIEW: HOME
--------------------------------------------------------------------- */
function renderHome() {
  const grid = $('#subjectGrid');
  grid.innerHTML = '';
  SUBJECTS.forEach(subj => {
    const card = el('button', 'subject-card');
    card.innerHTML = `
      <span class="badge" style="background:${subj.color}">${subj.icon}</span>
      <span class="name">${subj.name}</span>
      <span class="count">${subj.chapters.length} chapter${subj.chapters.length === 1 ? '' : 's'}</span>
    `;
    card.addEventListener('click', () => goSubject(subj.id));
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------------------
   VIEW: CHAPTER LIST (the "trail")
--------------------------------------------------------------------- */
function renderChapters() {
  const subj = getSubject(state.subjectId);
  if (!subj) return goHome();

  $('#subjectIcon').textContent = subj.icon;
  $('#subjectIcon').style.background = subj.color + '22';
  $('#subjectTitle').textContent = subj.name;
  $('#subjectSub').textContent = subj.chapters.length
    ? `${subj.chapters.length} chapter${subj.chapters.length === 1 ? '' : 's'} to explore`
    : 'Chapters coming soon';

  const trail = $('#chapterTrail');
  trail.innerHTML = '';

  const isMaths = subj.id === 'maths';
  if (isMaths) {
    trail.appendChild(el('div', '', mathsHeaderPillHTML() + mathsMascotHTML("Ready for a Maths adventure? 👋")));
  }

  if (!subj.chapters.length) {
    trail.appendChild(el('div', 'empty-state', `
      <span class="icon">🌱</span>
      <h3>No chapters here yet</h3>
      <p>Chapters for ${subj.name} will appear here as soon as they're added.</p>
    `));
    if (isMaths) mathsBindMascot();
    return;
  }

  subj.chapters.forEach((ch, i) => {
    const stone = el('button', 'chapter-stone');
    const label = ch.chapterNumber != null ? `Chapter ${ch.chapterNumber}: ${ch.title}` : ch.title;
    stone.innerHTML = `
      <span class="num">${ch.chapterNumber != null ? ch.chapterNumber : i + 1}</span>
      <span>
        <span class="title">${label}</span><br>
        <span class="sub">${ch.mcqs?.length || 0} test questions · ${ch.flashcards?.length || 0} flashcards</span>
      </span>
    `;
    stone.addEventListener('click', () => goChapter(subj.id, ch.id));
    trail.appendChild(stone);

    if (isMaths) {
      const shelfHTML = mathsBadgeShelfHTML(ch.id);
      if (shelfHTML) trail.appendChild(el('div', '', shelfHTML));
    }
  });

  if (isMaths) mathsBindMascot();
}

/* ---------------------------------------------------------------------
   VIEW: CHAPTER HUB
--------------------------------------------------------------------- */
function renderHub() {
  const subj = getSubject(state.subjectId);
  const chapter = getChapter(state.subjectId, state.chapterId);
  if (!subj || !chapter) return goHome();

  $('#hubCrumb').textContent = chapter.chapterNumber != null ? `${subj.name} · Chapter ${chapter.chapterNumber}` : subj.name;
  $('#hubTitle').textContent = chapter.chapterNumber != null ? `Chapter ${chapter.chapterNumber}: ${chapter.title}` : chapter.title;

  const tabs = $('#hubTabs');
  tabs.innerHTML = '';
  TABS.forEach(tab => {
    const btn = el('button', 'hub-tab', `<span class="ic">${tab.icon}</span> ${tab.label}`);
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(state.tab === tab.id));
    btn.addEventListener('click', () => { state.tab = tab.id; state.quiz = null; renderHub(); });
    tabs.appendChild(btn);
  });

  const panel = $('#hubPanel');
  panel.innerHTML = '';
  if (state.tab === 'notes') panel.appendChild(renderNotes(chapter));
  if (state.tab === 'test') panel.appendChild(renderQuizTab(chapter, 'mcqs', { media: false }));
  if (state.tab === 'flash') panel.appendChild(renderFlashcards(chapter));
  if (state.tab === 'imageq') panel.appendChild(renderQuizTab(chapter, 'imageQuestions', { media: 'large' }));
  if (state.tab === 'scenario') panel.appendChild(renderQuizTab(chapter, 'scenarios', { media: 'half', scenario: true }));
  if (state.tab === 'resources') panel.appendChild(renderResources(chapter));
}

/* ---------------------------------------------------------------------
   NOTES
--------------------------------------------------------------------- */
function renderNotes(chapter) {
  const wrap = el('div');
  const notes = chapter.notes || [];
  if (!notes.length) {
    wrap.appendChild(emptyState('📝', 'Notes coming soon', 'This chapter\u2019s notes will appear here once they\u2019re added.'));
    return wrap;
  }
  notes.forEach(section => {
    wrap.appendChild(el('div', 'notes-block', `<h4>${section.heading}</h4>${section.content}`));
  });
  return wrap;
}

/* ---------------------------------------------------------------------
   RESOURCES (videos & links)
--------------------------------------------------------------------- */
function renderResources(chapter) {
  const wrap = el('div');
  const videos = chapter.videos || [];
  const links = chapter.links || [];
  if (!videos.length && !links.length) {
    wrap.appendChild(emptyState('🔗', 'Nothing linked yet', 'Videos and official learning links for this chapter will show up here.'));
    return wrap;
  }
  const list = el('div', 'resource-list');
  videos.forEach(v => list.appendChild(resourceItem('▶️', v.title, v.url)));
  links.forEach(l => list.appendChild(resourceItem('🌐', l.title, l.url)));
  wrap.appendChild(list);
  return wrap;
}
function resourceItem(icon, title, url) {
  const a = el('a', 'resource-item');
  a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
  a.innerHTML = `<span class="ic">${icon}</span><span><span class="t">${title}</span><br><span class="u">${url}</span></span>`;
  return a;
}

function emptyState(icon, title, msg) {
  return el('div', 'empty-state', `<span class="icon">${icon}</span><h3>${title}</h3><p>${msg}</p>`);
}

/* =======================================================================
   PROGRESS TRACKING — stored in this browser's localStorage only.
   Not synced across devices, not backed by any server. See the
   Parent Dashboard for how this data is used and reset.
======================================================================= */
const PROGRESS_KEY = 'nlh_attempts_v1';
const PIN_KEY = 'nlh_dashboard_pin_v1';
const MAX_STORED_ATTEMPTS = 300;

const SECTION_LABELS = { mcqs: 'Test', imageQuestions: 'Picture Questions', scenarios: 'Real-Life Scenarios' };

function loadAttempts() {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function saveAttempt(record) {
  try {
    const attempts = loadAttempts();
    attempts.push(record);
    while (attempts.length > MAX_STORED_ATTEMPTS) attempts.shift();
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(attempts));
  } catch (e) { /* storage unavailable or full — fail silently, quiz still works */ }
}
function clearAttempts() {
  try { localStorage.removeItem(PROGRESS_KEY); } catch (e) {}
}
function recordAttempt(chapter, subj, sectionKey, q) {
  if (!chapter || !subj) return;
  const record = {
    id: Date.now() + '-' + Math.random().toString(36).slice(2, 7),
    ts: new Date().toISOString(),
    subjectId: subj.id,
    subjectName: subj.name,
    chapterId: chapter.id,
    chapterNumber: chapter.chapterNumber ?? null,
    chapterTitle: chapter.title,
    section: sectionKey,
    sectionLabel: SECTION_LABELS[sectionKey] || sectionKey,
    total: q.items.length,
    correct: q.correctCount,
    items: q.items.map((item, i) => ({
      question: item.question,
      options: item.options,
      correctIndex: item.correctIndex,
      chosenIndex: q.answers[i],
      isCorrect: q.answers[i] === item.correctIndex,
      explanation: item.explanation || ''
    }))
  };
  saveAttempt(record);
}

/* =======================================================================
   QUIZ ENGINE — generically drives Test / Picture Questions / Real-Life
   tabs from whichever array (mcqs / imageQuestions / scenarios) is passed.
======================================================================= */
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// Returns a NEW question object with its options in a random order for this
// attempt — the original chapter data (and its correctIndex) is never
// mutated, so re-shuffling happens fresh every time a quiz starts or restarts.
function shuffleQuestionOptions(item) {
  const order = shuffleArray(item.options.map((_, i) => i));
  const options = order.map((i) => item.options[i]);
  const correctIndex = order.indexOf(item.correctIndex);
  return { ...item, options, correctIndex };
}
function makeQuizState(items) {
  const shuffled = items.map(shuffleQuestionOptions);
  return { items: shuffled, i: 0, answered: null, correctCount: 0, done: false, answers: new Array(shuffled.length).fill(null) };
}

function renderQuizTab(chapter, key, opts) {
  const items = chapter[key] || [];
  const wrap = el('div');

  if (!items.length) {
    wrap.appendChild(emptyState('✨', 'Nothing here yet', 'This section will be filled in once the content is added.'));
    return wrap;
  }

  if (!state.quiz || state.quiz.key !== key) {
    state.quiz = { ...makeQuizState(items), key };
  }
  const q = state.quiz;
  const isMathsTest = state.subjectId === 'maths' && key === 'mcqs';

  if (q.done) {
    wrap.appendChild(renderScorePanel(q, () => { state.quiz = { ...makeQuizState(items), key }; renderHub(); }, isMathsTest ? chapter.id : null));
    return wrap;
  }

  const item = q.items[q.i];
  const card = el('div', 'quiz-card');

  if (isMathsTest) card.appendChild(el('div', '', mathsHeaderPillHTML()));

  const pct = Math.round(((q.i) / q.items.length) * 100);
  card.appendChild(el('div', 'quiz-progress', `<span>Question ${q.i + 1} of ${q.items.length}</span><span>Score: ${q.correctCount}</span>`));
  card.appendChild(el('div', 'progress-bar', `<div class="progress-bar-fill" style="width:${pct}%"></div>`));

  if (opts.media && item.imageUrl) {
    const mediaClass = opts.media === 'large' ? 'large' : 'half';
    card.appendChild(el('div', `quiz-media ${mediaClass}`, `<img src="${item.imageUrl}" alt="${item.imageAlt || ''}" style="width:100%;height:100%;object-fit:contain;border-radius:18px" onerror="this.parentElement.textContent='Image not available'">`));
  } else if (opts.media) {
    card.appendChild(el('div', `quiz-media ${opts.media === 'large' ? 'large' : 'half'}`, 'Illustration coming soon'));
  }

  if (opts.scenario && item.scenarioText) {
    card.appendChild(el('div', 'notes-block', `<p>${item.scenarioText}</p>`));
  }

  card.appendChild(el('div', 'quiz-question', item.question));

  const optionsWrap = el('div', 'quiz-options');
  const alreadyAnswered = q.answers[q.i];
  item.options.forEach((optText, idx) => {
    const optBtn = el('button', 'quiz-option', optText);
    if (alreadyAnswered != null) {
      optBtn.disabled = true;
      if (idx === item.correctIndex) optBtn.classList.add('correct');
      else if (idx === alreadyAnswered) optBtn.classList.add('incorrect');
    }
    optBtn.addEventListener('click', () => {
      if (q.answers[q.i] != null) return;
      q.answers[q.i] = idx;
      const isCorrect = idx === item.correctIndex;
      if (isCorrect) q.correctCount++;
      renderHub();
      if (isMathsTest && isCorrect) {
        mathsSpawnConfetti($('.quiz-card'));
      }
    });
    optionsWrap.appendChild(optBtn);
  });
  card.appendChild(optionsWrap);

  if (alreadyAnswered != null && item.explanation) {
    card.appendChild(el('div', 'quiz-explain show', `<strong>Explanation:</strong> ${item.explanation}`));
  }

  const controls = el('div', 'quiz-controls');
  const prevBtn = el('button', 'btn btn-ghost', 'Previous');
  prevBtn.disabled = q.i === 0;
  prevBtn.addEventListener('click', () => { q.i = Math.max(0, q.i - 1); renderHub(); });

  const restartBtn = el('button', 'btn btn-warn', 'Restart');
  restartBtn.addEventListener('click', () => { state.quiz = { ...makeQuizState(items), key }; renderHub(); });

  const isLast = q.i === q.items.length - 1;
  const nextBtn = el('button', 'btn btn-primary', isLast ? 'See Score' : 'Next');
  nextBtn.disabled = alreadyAnswered == null;
  nextBtn.addEventListener('click', () => {
    if (isLast) {
      q.done = true;
      recordAttempt(chapter, getSubject(state.subjectId), key, q);
      if (isMathsTest) {
        q.mathsResult = mathsRecordResult(chapter.id, q.correctCount, q.items.length);
      }
    }
    else { q.i++; }
    renderHub();
  });

  controls.appendChild(prevBtn);
  controls.appendChild(restartBtn);
  controls.appendChild(nextBtn);
  card.appendChild(controls);

  wrap.appendChild(card);
  return wrap;
}

function renderScorePanel(q, onRestart, mathsChapterId) {
  const wrap = el('div', 'quiz-card score-panel');
  const total = q.items.length;
  const pct = Math.round((q.correctCount / total) * 100);
  let msg = 'Nice try — let\u2019s go again!';
  if (pct >= 90) msg = 'Outstanding! You\u2019re a star! 🌟';
  else if (pct >= 70) msg = 'Great job! 🎉';
  else if (pct >= 50) msg = 'Good effort — a little more practice will help!';
  wrap.innerHTML = `
    <div class="big">${q.correctCount} / ${total}</div>
    <p style="margin:8px 0 20px">${msg}</p>
  `;

  if (mathsChapterId && q.mathsResult) {
    const r = q.mathsResult;
    const xpBlock = el('div', '', `<div class="maths-stats-pill" style="justify-content:center; margin:0 auto 12px"><span class="maths-stat">⭐ +${r.xpEarned} XP · ${r.totalXP} total</span></div>`);
    wrap.appendChild(xpBlock);
    if (r.newlyUnlocked.length) {
      const celeb = el('div', 'maths-badge-celebration', `New Badge${r.newlyUnlocked.length > 1 ? 's' : ''} Unlocked! 🎉<br>${r.newlyUnlocked.join(' · ')}`);
      wrap.appendChild(celeb);
    }
  }

  const restartBtn = el('button', 'btn btn-primary', 'Restart');
  restartBtn.addEventListener('click', onRestart);
  wrap.appendChild(restartBtn);
  return wrap;
}

/* =======================================================================
   FLASHCARDS
======================================================================= */
function renderFlashcards(chapter) {
  const cards = chapter.flashcards || [];
  const wrap = el('div');
  if (!cards.length) {
    wrap.appendChild(emptyState('🃏', 'Flashcards coming soon', 'This chapter\u2019s flashcards will appear here once they\u2019re added.'));
    return wrap;
  }

  if (!state.quiz || state.quiz.key !== 'flash') {
    state.quiz = { key: 'flash', i: 0, flipped: false };
  }
  const fs = state.quiz;
  const card = cards[fs.i];

  const flashWrap = el('div', 'flash-wrap');
  flashWrap.appendChild(el('div', 'quiz-progress', `<span>Card ${fs.i + 1} of ${cards.length}</span>`));

  const flashCard = el('div', 'flash-card' + (fs.flipped ? ' flipped' : ''));
  flashCard.innerHTML = `
    <div class="flash-inner">
      <div class="flash-face flash-front">${card.front}</div>
      <div class="flash-face flash-back">${card.back}</div>
    </div>
  `;
  flashCard.addEventListener('click', () => { fs.flipped = !fs.flipped; renderHub(); });
  flashWrap.appendChild(flashCard);
  flashWrap.appendChild(el('p', 'flash-hint', 'Tap the card to flip it'));

  const controls = el('div', 'quiz-controls');
  const prevBtn = el('button', 'btn btn-ghost', 'Previous');
  prevBtn.disabled = fs.i === 0;
  prevBtn.addEventListener('click', () => { fs.i = Math.max(0, fs.i - 1); fs.flipped = false; renderHub(); });

  const restartBtn = el('button', 'btn btn-warn', 'Restart');
  restartBtn.addEventListener('click', () => { state.quiz = { key: 'flash', i: 0, flipped: false }; renderHub(); });

  const nextBtn = el('button', 'btn btn-primary', 'Next');
  nextBtn.disabled = fs.i === cards.length - 1;
  nextBtn.addEventListener('click', () => { fs.i = Math.min(cards.length - 1, fs.i + 1); fs.flipped = false; renderHub(); });

  controls.appendChild(prevBtn);
  controls.appendChild(restartBtn);
  controls.appendChild(nextBtn);
  flashWrap.appendChild(controls);

  wrap.appendChild(flashWrap);
  return wrap;
}

/* =======================================================================
   PARENT DASHBOARD
======================================================================= */
function renderDashboard() {
  const gate = $('#dashboardGate');
  const content = $('#dashboardContent');
  gate.innerHTML = '';

  if (!state.dashboardUnlocked) {
    content.hidden = true;
    gate.hidden = false;
    gate.appendChild(renderDashboardGate());
    return;
  }
  gate.hidden = true;
  content.hidden = false;
  content.innerHTML = '';
  content.appendChild(renderDashboardContent());
}

function renderDashboardGate() {
  const savedPin = localStorage.getItem(PIN_KEY);
  const wrap = el('div', 'quiz-card dash-gate');

  if (!savedPin) {
    wrap.innerHTML = `
      <h3 style="font-family:'Baloo 2'; margin-bottom:6px;">Set up a Parent PIN</h3>
      <p class="muted" style="margin-bottom:16px;">Choose a 4-digit PIN so only you can open this dashboard. This is a light gate, not real security — anyone who can view this site's code can bypass it.</p>
      <input type="tel" inputmode="numeric" maxlength="4" id="pinNew" class="pin-input" placeholder="••••" autocomplete="off">
      <p id="pinNewError" class="dash-error" hidden>Please enter exactly 4 digits.</p>
      <button class="btn btn-primary" id="pinSetBtn" style="margin-top:14px;">Set PIN &amp; Continue</button>
    `;
    wrap.querySelector('#pinSetBtn').addEventListener('click', () => {
      const val = wrap.querySelector('#pinNew').value.trim();
      if (!/^\d{4}$/.test(val)) { wrap.querySelector('#pinNewError').hidden = false; return; }
      localStorage.setItem(PIN_KEY, val);
      state.dashboardUnlocked = true;
      renderDashboard();
    });
  } else {
    wrap.innerHTML = `
      <h3 style="font-family:'Baloo 2'; margin-bottom:6px;">Enter Parent PIN</h3>
      <p class="muted" style="margin-bottom:16px;">Enter your 4-digit PIN to view Niranjan's progress.</p>
      <input type="tel" inputmode="numeric" maxlength="4" id="pinEnter" class="pin-input" placeholder="••••" autocomplete="off">
      <p id="pinEnterError" class="dash-error" hidden>Incorrect PIN. Try again.</p>
      <button class="btn btn-primary" id="pinUnlockBtn" style="margin-top:14px;">Unlock</button>
      <p style="margin-top:16px;"><a href="#" id="pinForgotLink" class="dash-link">Forgot your PIN?</a></p>
    `;
    const tryUnlock = () => {
      const val = wrap.querySelector('#pinEnter').value.trim();
      if (val === savedPin) { state.dashboardUnlocked = true; renderDashboard(); }
      else { wrap.querySelector('#pinEnterError').hidden = false; }
    };
    wrap.querySelector('#pinUnlockBtn').addEventListener('click', tryUnlock);
    wrap.querySelector('#pinEnter').addEventListener('keydown', (e) => { if (e.key === 'Enter') tryUnlock(); });
    wrap.querySelector('#pinForgotLink').addEventListener('click', (e) => {
      e.preventDefault();
      if (confirm('This will let you set a brand-new PIN. Continue?')) {
        localStorage.removeItem(PIN_KEY);
        renderDashboard();
      }
    });
  }
  return wrap;
}

function renderDashboardContent() {
  const wrap = el('div');
  const attempts = loadAttempts();

  const controls = el('div', 'dash-controls');
  const lockBtn = el('button', 'btn btn-ghost', '🔒 Lock');
  lockBtn.addEventListener('click', () => { state.dashboardUnlocked = false; renderDashboard(); });
  const downloadBtn = el('button', 'btn btn-ghost', '⬇️ Download Report');
  downloadBtn.addEventListener('click', () => downloadReport(attempts));
  const clearBtn = el('button', 'btn btn-warn', '🗑️ Clear All Data');
  clearBtn.addEventListener('click', () => {
    if (confirm('This permanently deletes all recorded attempts on this device. Continue?')) {
      clearAttempts();
      renderDashboard();
    }
  });
  controls.appendChild(lockBtn);
  if (attempts.length) { controls.appendChild(downloadBtn); controls.appendChild(clearBtn); }
  wrap.appendChild(controls);

  if (!attempts.length) {
    wrap.appendChild(emptyState('📊', 'No activity yet', 'Once Niranjan completes a Test, Picture Questions, or Real-Life Scenarios quiz, the results will show up here.'));
    return wrap;
  }

  // ---- Overview stats ----
  const totalQuestions = attempts.reduce((s, a) => s + a.total, 0);
  const totalCorrect = attempts.reduce((s, a) => s + a.correct, 0);
  const accuracy = totalQuestions ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  const chapterCount = new Set(attempts.map(a => a.chapterId)).size;

  const statGrid = el('div', 'dash-stat-grid');
  statGrid.appendChild(dashStat('📝', attempts.length, 'Attempts completed'));
  statGrid.appendChild(dashStat('❓', totalQuestions, 'Questions answered'));
  statGrid.appendChild(dashStat('🎯', accuracy + '%', 'Overall accuracy'));
  statGrid.appendChild(dashStat('📚', chapterCount, 'Chapters practiced'));
  wrap.appendChild(statGrid);

  // ---- Per-chapter progress ----
  wrap.appendChild(el('h3', 'dash-heading', 'Progress by Chapter'));
  const byChapter = {};
  attempts.forEach(a => {
    const k = a.chapterId;
    if (!byChapter[k]) byChapter[k] = { subjectName: a.subjectName, chapterNumber: a.chapterNumber, chapterTitle: a.chapterTitle, sections: {} };
    if (!byChapter[k].sections[a.section]) byChapter[k].sections[a.section] = [];
    byChapter[k].sections[a.section].push(a);
  });
  const chapterList = el('div', 'dash-chapter-list');
  Object.values(byChapter).forEach(ch => {
    const card = el('div', 'dash-chapter-card');
    const label = ch.chapterNumber != null ? `Chapter ${ch.chapterNumber}: ${ch.chapterTitle}` : ch.chapterTitle;
    card.appendChild(el('div', 'dash-chapter-title', `${ch.subjectName} — ${label}`));
    Object.entries(ch.sections).forEach(([sectionKey, list]) => {
      const latest = list[list.length - 1];
      const best = list.reduce((b, a) => (a.correct / a.total > b.correct / b.total ? a : b), list[0]);
      const pct = Math.round((latest.correct / latest.total) * 100);
      const row = el('div', 'dash-bar-row');
      row.innerHTML = `
        <span class="dash-bar-label">${SECTION_LABELS[sectionKey] || sectionKey} <span class="muted">(${list.length} attempt${list.length === 1 ? '' : 's'})</span></span>
        <div class="dash-bar"><div class="dash-bar-fill" style="width:${pct}%"></div></div>
        <span class="dash-bar-value">Latest: ${latest.correct}/${latest.total} &nbsp;·&nbsp; Best: ${best.correct}/${best.total}</span>
      `;
      card.appendChild(row);
    });
    chapterList.appendChild(card);
  });
  wrap.appendChild(chapterList);

  // ---- Recent activity ----
  wrap.appendChild(el('h3', 'dash-heading', 'Recent Activity'));
  const recentList = el('div', 'dash-activity-list');
  [...attempts].reverse().slice(0, 12).forEach(a => {
    const label = a.chapterNumber != null ? `Chapter ${a.chapterNumber}: ${a.chapterTitle}` : a.chapterTitle;
    const row = el('div', 'dash-activity-row');
    const dt = new Date(a.ts);
    row.innerHTML = `
      <span class="dash-activity-date">${dt.toLocaleDateString()} <span class="muted">${dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></span>
      <span class="dash-activity-desc"><strong>${a.subjectName}</strong> — ${label}<br><span class="muted">${a.sectionLabel}</span></span>
      <span class="dash-activity-score">${a.correct}/${a.total}</span>
    `;
    recentList.appendChild(row);
  });
  wrap.appendChild(recentList);

  // ---- Needs practice (most-missed questions) ----
  const missCounts = {};
  attempts.forEach(a => {
    a.items.forEach(item => {
      if (item.isCorrect) return;
      const key = item.question;
      if (!missCounts[key]) missCounts[key] = { ...item, misses: 0 };
      missCounts[key].misses++;
    });
  });
  const mistakes = Object.values(missCounts).sort((x, y) => y.misses - x.misses).slice(0, 12);
  wrap.appendChild(el('h3', 'dash-heading', 'Needs Practice'));
  if (!mistakes.length) {
    wrap.appendChild(emptyState('🌟', 'No repeated mistakes', 'Niranjan hasn\u2019t missed any question more than once — nice work!'));
  } else {
    const mistakeList = el('div', 'dash-mistake-list');
    mistakes.forEach(m => {
      const row = el('div', 'dash-mistake-row');
      row.innerHTML = `
        <div class="dash-mistake-q">${m.question} <span class="dash-mistake-count">missed ${m.misses}×</span></div>
        <div class="dash-mistake-a">Correct answer: <strong>${m.options[m.correctIndex]}</strong></div>
        ${m.explanation ? `<div class="dash-mistake-exp">${m.explanation}</div>` : ''}
      `;
      mistakeList.appendChild(row);
    });
    wrap.appendChild(mistakeList);
  }

  return wrap;
}

function dashStat(icon, value, label) {
  return el('div', 'dash-stat', `<span class="dash-stat-icon">${icon}</span><span class="dash-stat-value">${value}</span><span class="dash-stat-label">${label}</span>`);
}

function downloadReport(attempts) {
  const lines = [];
  lines.push('Niranjan Learning Hub — Progress Report');
  lines.push('Generated: ' + new Date().toLocaleString());
  lines.push('='.repeat(50));
  attempts.forEach(a => {
    const dt = new Date(a.ts);
    const label = a.chapterNumber != null ? `Chapter ${a.chapterNumber}: ${a.chapterTitle}` : a.chapterTitle;
    lines.push('');
    lines.push(`${dt.toLocaleString()} — ${a.subjectName} — ${label} — ${a.sectionLabel}`);
    lines.push(`Score: ${a.correct}/${a.total}`);
    a.items.forEach((item, i) => {
      lines.push(`  ${i + 1}. [${item.isCorrect ? 'CORRECT' : 'WRONG'}] ${item.question}`);
      if (!item.isCorrect) {
        lines.push(`     Chosen: ${item.chosenIndex != null ? item.options[item.chosenIndex] : '(no answer)'}`);
        lines.push(`     Correct: ${item.options[item.correctIndex]}`);
      }
    });
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'niranjan-learning-hub-report.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ---------------------------------------------------------------------
   BOOT
--------------------------------------------------------------------- */
render();
