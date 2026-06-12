const CACHE_NAME = 'saojoaoirece-v3';
const API_HOST = 'api-para-alimenta-projeto.onrender.com';

const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/sw.js',
  '/favicon.ico',
  '/icons/icon192.png',
  '/icons/icon512.png',
  '/icons/icon512-maskable.png',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.hostname === API_HOST) {
    event.respondWith(networkFirstWithCache(request));
    return;
  }

  if (isStaticAsset(request)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstWithCache(request));
    return;
  }

  event.respondWith(fetch(request));
});

function isStaticAsset(request) {
  const ext = request.url.split('.').pop().split('?')[0].toLowerCase();
  return ['js', 'css', 'png', 'webp', 'jpg', 'jpeg', 'svg', 'ico', 'woff2', 'json'].includes(ext);
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok && response.type === 'basic') {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request);
  }
}

async function networkFirstWithCache(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;

    if (request.mode === 'navigate') {
      return caches.match('/');
    }

    return new Response(JSON.stringify({ error: 'offline' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
