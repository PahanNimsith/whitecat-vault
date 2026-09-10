/* ══════════════════════════════════════════════════
   WHITE CAT VAULT — Service Worker  v2.0
   CACHE_NAME injected by build.js at deploy time.
   Fallback: wcv-v2 if not replaced.
══════════════════════════════════════════════════ */

const CACHE_NAME  = 'wcv-v2-fallback';  /* replaced by build.js at deploy */
const OFFLINE_URL = '/offline.html';

const PRECACHE = [
  '/',
  '/index.html',
  '/tool_index.html',
  '/about_index.html',
  '/coming_soon.html',
  '/offline.html',
  '/404.html',
  '/style.css',
  '/site.js',
  '/scripts/site/nav-links.js',
  '/scripts/site/site-stats.js',
  '/scripts/tool/tool-library.js',
  '/assets/icons/icon-192.png',
  '/assets/icons/favicon-32.png',
  '/assets/logo.webp',
  '/assets/home/games.svg',
  '/assets/home/movie.svg',
  '/assets/og-preview.png',
];
/* NOTE: pwa.js is NOT in PRECACHE — it bootstraps the SW itself.
   It is fetched network-first on every load. */

/* ── Install ── */
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll(PRECACHE.map(u => new Request(u, { cache: 'reload' })))
           .catch(() => {})
    )
  );
});

/* ── Activate: purge old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* ── Fetch strategy ── */
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  const isHTML  = req.headers.get('accept')?.includes('text/html');
  const isAsset = /\.(png|svg|webp|jpg|jpeg|gif|css|woff2?)$/.test(url.pathname);
  const isPwaJS = url.pathname.endsWith('/scripts/site/pwa.js');

  /* pwa.js — network first, no cache write */
  if (isPwaJS) {
    event.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }

  if (isHTML) {
    /* Network first → cache fallback → offline page */
    event.respondWith(
      fetch(req)
        .then(res => {
          caches.open(CACHE_NAME).then(c => c.put(req, res.clone()));
          return res;
        })
        .catch(async () => {
          const cached = await caches.match(req);
          return cached || caches.match(OFFLINE_URL);
        })
    );
  } else if (isAsset) {
    /* Cache first → network fallback */
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(res => {
          caches.open(CACHE_NAME).then(c => c.put(req, res.clone()));
          return res;
        });
      }).catch(() => new Response('', { status: 404 }))
    );
  }
});
