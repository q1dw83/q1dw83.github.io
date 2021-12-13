const CACHE_NAME = 'JSQ-CACHE';
const SETUP_ASSET_URLS = [
  '/',
];

self.addEventListener('install', context => {
  context.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SETUP_ASSET_URLS)).then(self.skipWaiting())
  );
});

self.addEventListener('fetch', context => {
  context.respondWith(
    fetch(context.request).then(response => {
      return caches.open(CACHE_NAME).then(cache => {
        return cache.put(context.request, response.clone()).then(() => {
          return response; 
        });
      });      
    }).catch(() => {
      return caches.match(context.request);
    })
  );
});
