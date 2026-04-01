const CACHE_NAME = 'junior-scholar-v1';
const urlsToCache = [
  '/junior-scholar-portal/',
  '/junior-scholar-portal/index.html',
  '/junior-scholar-portal/dashboard.html',
  '/junior-scholar-portal/courses.html',
  '/junior-scholar-portal/practice.html',
  '/junior-scholar-portal/live-class.html',
  '/junior-scholar-portal/student-resources.html',
  '/junior-scholar-portal/login.html',
  '/junior-scholar-portal/register.html',
  '/junior-scholar-portal/payment.html'
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
