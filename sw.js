const CACHE_NAME = 'junior-scholar-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/courses.html',
  '/practice.html',
  '/live-class.html',
  '/student-resources.html',
  '/login.html',
  '/register.html',
  '/payment.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
