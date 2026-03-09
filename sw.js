const CACHE_NAME = 'music-play-v15-cache';
const URLS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './logo.svg',
  './icon-192.png',
  './icon-512.png'
];

// Evento de instalación: Guarda los archivos esenciales en la memoria caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('✅ Archivos en caché correctamente');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// Evento de activación: Limpieza de cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  event.waitUntil(clients.claim());
});

// Evento Fetch: Sirve los archivos desde la caché si el usuario no tiene internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve la respuesta de la caché o realiza la petición a la red
        return response || fetch(event.request);
      })
  );
});
