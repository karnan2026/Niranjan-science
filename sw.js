/* =====================================================================
   Niranjan Learning Hub — Service Worker
   Regenerated automatically whenever the site is rebuilt (see the
   cache version below). Precaches the app shell (HTML/CSS/JS/chapter
   data/icons) so the site loads and works offline after first visit.
   Images and any other assets are cached the first time they're
   actually viewed (runtime caching), so a first install stays fast.
===================================================================== */
const CACHE_VERSION = 'nlh-cache-2026-08-19';
const APP_SHELL = [
  "./",
  "index.html",
  "manifest.json",
  "css/style.css",
  "css/maths-theme.css",
  "js/app.js",
  "js/maths-game.js",
  "js/data/subjects.js",
  "js/data/chapter-schema.js",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/apple-touch-icon.png",
  "js/data/chapters/science-good-health.js",
  "js/data/chapters/science-skeletal-muscular-systems.js",
  "js/data/chapters/social-continents-oceans.js",
  "js/data/chapters/maths-we-the-travellers-1.js"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // don't intercept cross-origin (fonts CDN, video links, etc.)

  // App shell (HTML/CSS/JS/chapter data): network-first, falling back to cache,
  // so the student gets the latest content when online but the app still
  // works offline once it's been visited at least once.
  const isAppShell = APP_SHELL.some((p) => url.pathname.endsWith(p.replace('./', '/')) || url.pathname.endsWith('/' + p));
  if (isAppShell || req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('index.html')))
    );
    return;
  }

  // Everything else (images, etc.): cache-first, then cache the network response
  // for next time — this is what makes previously-viewed chapters work offline.
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return res;
      });
    })
  );
});
