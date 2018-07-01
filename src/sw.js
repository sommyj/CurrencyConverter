const staticCacheName = 'wittr-static-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll([
        '/skeleton',
        'js/main/index.js',
        'css/style.css',
        'js/jquery.min.js',
        'js/popper.min.js',
        'js/bootstrap.min.js'
      ]);
    })
  );
});



self.addEventListener('fetch', function(event) {
  var requestUrl = new URL(event.request.url);

  if (requestUrl.origin === location.origin) {
    if (requestUrl.pathname === '/') {
      event.respondWith(caches.match('/skeleton'));
      return;
    }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
