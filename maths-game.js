/* =====================================================================
   MATHS GAME ENGINE — brings QuizQuest's XP / streak / badge / mascot /
   confetti experience into Niranjan Learning Hub, scoped to the Maths
   subject ONLY. Every other subject keeps the plain Learning Hub look
   and never touches this file's state.

   Storage is separate from the Parent Dashboard's attempt log (which
   still records every Maths attempt as normal) — this file only adds
   the game layer (XP totals, streaks, badges) on top.
===================================================================== */

const MATHS_GAME_KEY = 'nlh_maths_game_v1';

function mathsLoadGame() {
  try {
    const raw = localStorage.getItem(MATHS_GAME_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return {
      totalXP: typeof parsed.totalXP === 'number' ? parsed.totalXP : 0,
      chapters: parsed.chapters && typeof parsed.chapters === 'object' ? parsed.chapters : {}
    };
  } catch (e) {
    return { totalXP: 0, chapters: {} };
  }
}
function mathsSaveGame(game) {
  try { localStorage.setItem(MATHS_GAME_KEY, JSON.stringify(game)); } catch (e) {}
}
function mathsChapterProgress(game, chapterId) {
  if (!game.chapters[chapterId]) {
    game.chapters[chapterId] = { attempts: 0, bestScore: 0, bestPct: 0, badges: [] };
  }
  return game.chapters[chapterId];
}

/* ---------------------------------------------------------------------
   BADGES — generic, percentage-based so they work for any chapter size
   (QuizQuest's originals were tuned to a 10-question bank; these use
   the same three-tier idea scaled to percentage of correct answers).
--------------------------------------------------------------------- */
const MATHS_BADGES = [
  { key: 'adventure_started', label: '🚀 Adventure Started', check: (p) => p.attempts >= 1 },
  { key: 'math_explorer', label: '🏅 Math Explorer', check: (p) => p.bestPct >= 80 },
  { key: 'math_superstar', label: '🏆 Math Superstar', check: (p) => p.bestPct >= 100 },
];

// Call once when a Maths quiz finishes. Returns { totalXP, newlyUnlocked }.
function mathsRecordResult(chapterId, correctCount, total) {
  const game = mathsLoadGame();
  const xpEarned = correctCount * 10;
  game.totalXP += xpEarned;

  const p = mathsChapterProgress(game, chapterId);
  p.attempts += 1;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  if (correctCount > p.bestScore) p.bestScore = correctCount;
  if (pct > p.bestPct) p.bestPct = pct;

  const newlyUnlocked = [];
  MATHS_BADGES.forEach(badge => {
    if (!p.badges.includes(badge.key) && badge.check(p)) {
      p.badges.push(badge.key);
      newlyUnlocked.push(badge.label);
    }
  });

  mathsSaveGame(game);
  return { totalXP: game.totalXP, xpEarned, newlyUnlocked, bestPct: p.bestPct };
}

function mathsBadgeShelfHTML(chapterId) {
  const game = mathsLoadGame();
  const p = mathsChapterProgress(game, chapterId);
  const unlocked = MATHS_BADGES.filter(b => p.badges.includes(b.key));
  if (!unlocked.length) return '';
  return `<div class="maths-badges-shelf">
    <p class="maths-badges-title">Badges Earned</p>
    <div class="maths-badges-list">${unlocked.map(b => `<span class="maths-badge-chip">${b.label}</span>`).join('')}</div>
  </div>`;
}

/* ---------------------------------------------------------------------
   HEADER PILL — XP total, shown at the top of Maths screens
--------------------------------------------------------------------- */
function mathsHeaderPillHTML() {
  const game = mathsLoadGame();
  return `<div class="maths-stats-pill">
    <span class="maths-stat"><span class="maths-stat-icon">⭐</span>${game.totalXP} XP</span>
  </div>`;
}

/* ---------------------------------------------------------------------
   MASCOT — Ziggy the star, with a tappable speech bubble
--------------------------------------------------------------------- */
const MATHS_MASCOT_PHRASES = [
  "You're going to do great! 🌟",
  "Let's learn something fun today! 📚",
  "Numbers are your superpower! 🎉",
  "Every quiz makes you smarter! 🧠",
  "I believe in you, Champ! 🚀",
  "Take your time — you've got this! ✨",
];

function mathsMascotHTML(greeting) {
  return `<div class="maths-hero">
    <div class="maths-hero-text">
      <p class="maths-eyebrow">${greeting || 'Ready for a Maths adventure? 👋'}</p>
    </div>
    <div class="maths-mascot-wrap">
      <div class="maths-speech-bubble" id="mathsSpeechBubble">Hi! I'm Ziggy! Tap me! ✨</div>
      <button class="maths-mascot" id="mathsMascotBtn" type="button" aria-label="Say hi to Ziggy the star">
        <span class="maths-mascot-star">
          <span class="maths-eye maths-eye-left"></span>
          <span class="maths-eye maths-eye-right"></span>
          <span class="maths-mouth"></span>
        </span>
      </button>
    </div>
  </div>`;
}
function mathsBindMascot() {
  const btn = document.getElementById('mathsMascotBtn');
  const bubble = document.getElementById('mathsSpeechBubble');
  if (!btn || !bubble) return;
  btn.addEventListener('click', () => {
    btn.classList.remove('wiggle');
    void btn.offsetWidth;
    btn.classList.add('wiggle');
    bubble.textContent = MATHS_MASCOT_PHRASES[Math.floor(Math.random() * MATHS_MASCOT_PHRASES.length)];
    bubble.classList.remove('show');
    void bubble.offsetWidth;
    bubble.classList.add('show');
  });
}

/* ---------------------------------------------------------------------
   CONFETTI — a burst of falling pieces inside a given container element
--------------------------------------------------------------------- */
function mathsSpawnConfetti(container) {
  if (!container) return;
  const colors = ['#ff7a59', '#ff6fa5', '#2fc97e', '#3ea8ff', '#9b6bff', '#ffd23f'];
  const layer = document.createElement('div');
  layer.className = 'maths-confetti-layer';
  container.appendChild(layer);
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('span');
    piece.className = 'maths-confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (1.2 + Math.random()) + 's';
    piece.style.animationDelay = (Math.random() * 0.2) + 's';
    layer.appendChild(piece);
  }
  setTimeout(() => layer.remove(), 2600);
}
