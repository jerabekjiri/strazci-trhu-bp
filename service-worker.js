// const cacheName = 'cache-precache';
// const resourceToPrecache = [
//     '/',
//     'index.html',
//     'src/styles.css'
// ];

// self.addEventListener('install', event => {
//     event.waitUntil(
//         caches.open(cacheName).then(cache => {
//             return cache.addAll(resourceToPrecache);
//         })
//     )
// });

// self.addEventListener('activate', event => {
// });

// self.addEventListener('fetch', event => {
//     event.respondWith(caches.match(event.request).then(cachedResponse => {
//         return cachedResponse || fetch(event.request);
//     }));
// });