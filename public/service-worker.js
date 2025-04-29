const CACHE_NAME = 'onebigfamily-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png'
];

// Log function
const log = (message) => {
  console.log(`[Service Worker] ${message}`);
};

// Install event - cache assets
self.addEventListener('install', (event) => {
  log('Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        log('Caching app shell');
        return Promise.all(
          urlsToCache.map(url => {
            return cache.add(url).catch(err => {
              log(`Failed to cache: ${url} - ${err.message}`);
            });
          })
        );
      })
      .then(() => {
        log('Skip waiting on install');
        return self.skipWaiting();
      })
      .catch(error => {
        log(`Install failed: ${error.message}`);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  log('Activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              log(`Deleting old cache: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        log('Claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch event - network first, falling back to cache
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Handle only GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Add to cache
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
            log(`Cached resource: ${event.request.url}`);
          })
          .catch(error => {
            log(`Failed to cache: ${event.request.url} - ${error.message}`);
          });

        return response;
      })
      .catch(() => {
        log(`Serving from cache: ${event.request.url}`);
        return caches.match(event.request);
      })
  );
}); 