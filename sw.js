const CACHE_NAME = 'smartcents-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/pages/auth/login.html',
  '/pages/main/dashboard.html',
  '/manifest.json',
  '/pages/main/assets.html',
  '/pages/main/analytics.html',
  '/pages/main/security.html',
  '/pages/auth/signup.html',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});