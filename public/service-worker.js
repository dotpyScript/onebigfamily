const CACHE_NAME = 'onebigfamily-v7';

// Core app shell files needed for basic functionality
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Critical static assets that should be explicitly cached
const CRITICAL_ASSETS = [
  '/favicon.ico',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/logo.png',
  '/mstile-150x150.png'
];

// Images to precache (adding hero images)
const PRECACHE_IMAGES = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/hero4.jpg',
  '/images/hero5.jpg',
  '/images/help-illustration.svg'
];

// Log function
const log = (message) => {
  console.log(`[Service Worker] ${message}`);
};

// Helper function to cache a single resource with error handling
function cacheResource(cache, url) {
  return fetch(url)
    .then(response => {
      if (!response || response.status !== 200) {
        log(`Failed to cache: ${url}, status: ${response ? response.status : 'no response'}`);
        return false;
      }
      return cache.put(url, response)
        .then(() => {
          log(`Successfully cached: ${url}`);
          return true;
        });
    })
    .catch(error => {
      log(`Error caching ${url}: ${error.message}`);
      return false;
    });
}

// Handle critical assets with special care
function handleCriticalAsset(event, assetPath) {
  return caches.match(event.request)
    .then(cachedResponse => {
      if (cachedResponse) {
        // We have it cached! Refresh cache in background
        fetch(event.request)
          .then(response => {
            if (response && response.status === 200) {
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, response))
                .catch(err => log(`Critical asset cache refresh failed: ${err.message}`));
            }
          })
          .catch(err => log(`Background fetch for critical asset failed: ${err.message}`));
        return cachedResponse;
      }

      // If not cached, try network, then provide fallback
      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200) {
            log(`Network failed for critical asset: ${assetPath}`);
            if (assetPath.includes('favicon.ico')) {
              return createImageFallbackResponse();
            }
            throw new Error('Critical asset not available');
          }

          // Cache the successful response for future use
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache))
            .catch(err => log(`Critical asset caching failed: ${err.message}`));

          return response;
        })
        .catch(error => {
          log(`Fetch failed for critical asset: ${assetPath}, ${error.message}`);

          // For favicon.ico, return a transparent image
          if (assetPath.includes('favicon.ico')) {
            return createImageFallbackResponse();
          }

          // For other critical assets, fail more gracefully
          throw error;
        });
    });
}

// Install event handler
self.addEventListener('install', event => {
  log('Service Worker installing');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        log('Cache opened, caching core assets');
        return Promise.all([
          // Cache core static assets
          cache.addAll([
            '/',
            '/index.html',
            '/static/js/main.chunk.js',
            '/static/js/bundle.js',
            '/manifest.json',
            '/static/media/logo.png',
            '/static/css/main.chunk.css'
          ]),
          // Cache critical assets separately for better error handling
          ...CRITICAL_ASSETS.map(asset => cacheResource(cache, asset))
        ]);
      })
      .then(() => {
        log('Installation complete');
        return self.skipWaiting();
      })
      .catch(error => {
        log(`Installation failed: ${error.message}`);
      })
  );
});

// Activate event handler
self.addEventListener('activate', event => {
  log('Service Worker activating');

  // Clean up old caches
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(name => {
            if (name !== CACHE_NAME) {
              log(`Deleting old cache: ${name}`);
              return caches.delete(name);
            }
          })
        );
      })
      .then(() => {
        log('Activation complete, claiming clients');
        return self.clients.claim();
      })
      .catch(error => {
        log(`Activation error: ${error.message}`);
      })
  );
});

// Helper function to create transparent image fallback
function createImageFallbackResponse() {
  // 1x1 transparent PNG
  const TRANSPARENT_PNG = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  const byteCharacters = atob(TRANSPARENT_PNG);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: 'image/png' });
  return new Response(blob, {
    status: 200,
    statusText: 'OK',
    headers: new Headers({ 'Content-Type': 'image/png' })
  });
}

// Fetch event handler
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // Check if request is for a critical asset
  const criticalAssetPath = CRITICAL_ASSETS.find(asset => url.pathname.endsWith(asset));
  if (criticalAssetPath) {
    event.respondWith(handleCriticalAsset(event, criticalAssetPath));
    return;
  }

  // Check if request is for an image
  const isImage = event.request.destination === 'image' ||
    /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname);

  if (isImage) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            // If we have it in cache, return immediately
            // Also update cache in the background
            fetch(event.request)
              .then(response => {
                if (response && response.status === 200) {
                  caches.open(CACHE_NAME)
                    .then(cache => cache.put(event.request, response))
                    .catch(err => log(`Image cache update failed: ${err.message}`));
                }
              })
              .catch(err => log(`Background fetch for image failed: ${err.message}`));

            return cachedResponse;
          }

          // If not in cache, try to fetch from network
          return fetch(event.request)
            .then(response => {
              if (!response || response.status !== 200) {
                throw new Error('Image not available');
              }

              // Cache the response for future
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(event.request, responseToCache))
                .catch(err => log(`Image caching failed: ${err.message}`));

              return response;
            })
            .catch(error => {
              log(`Image fetch failed: ${url.pathname}, ${error.message}`);
              return createImageFallbackResponse();
            });
        })
    );
    return;
  }

  // For HTML navigations, use network-first strategy with fallback to cached home page
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200) {
            throw new Error('Navigation response not valid');
          }

          // Cache the navigation result
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseToCache))
            .catch(err => log(`Navigation caching failed: ${err.message}`));

          return response;
        })
        .catch(error => {
          log(`Navigation fetch failed, serving from cache: ${error.message}`);

          return caches.match(event.request)
            .then(cachedResponse => {
              // If we have a match in cache, return it
              if (cachedResponse) {
                return cachedResponse;
              }

              // If no match, fallback to cached home page
              return caches.match('/index.html');
            });
        })
    );
    return;
  }

  // For all other requests, use stale-while-revalidate strategy
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Clone the request to use it in fetch later
        const fetchPromise = fetch(event.request.clone())
          .then(response => {
            // Don't cache non-valid responses
            if (!response || response.status !== 200) {
              return response;
            }

            // Cache the new response
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache))
              .catch(err => log(`Cache update failed: ${err.message}`));

            return response;
          })
          .catch(error => {
            log(`Fetch failed: ${url.pathname}, ${error.message}`);
            // Return undefined to fall back to cached version if it exists
            return undefined;
          });

        // Return the cache response immediately, update cache in background
        return cachedResponse || fetchPromise;
      })
  );
});

// Handle push notifications
self.addEventListener('push', (event) => {
  log('Push notification received');

  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (e) {
    payload = {
      title: 'One Big Family',
      body: event.data ? event.data.text() : 'New update available'
    };
  }

  const title = payload.title || 'One Big Family';
  const options = {
    body: payload.body || 'New update available',
    icon: '/android-chrome-192x192.png',
    badge: '/favicon-32x32.png',
    tag: 'onebigfamily-notification',
    vibrate: [100, 50, 100], // Vibration pattern for mobile devices
    data: {
      url: payload.url || '/'
    },
    actions: [
      {
        action: 'open',
        title: 'Open App'
      }
    ],
    requireInteraction: true // Keep notification visible until user interacts with it
  };

  log(`Showing notification: ${title}`);

  event.waitUntil(
    self.registration.showNotification(title, options)
      .catch(err => log(`Notification error: ${err.message}`))
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  log(`Notification clicked: ${event.notification.tag}, action: ${event.action}`);
  event.notification.close();

  // Extract the URL from the notification data
  const urlToOpen = event.notification.data && event.notification.data.url ?
    event.notification.data.url : '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(clientList => {
        // Try to focus an existing window
        for (const client of clientList) {
          if ((client.url === urlToOpen || client.url.endsWith('/')) && 'focus' in client) {
            log('Focusing existing client window');
            return client.focus();
          }
        }

        // If no window found, open a new one
        log('Opening new client window');
        return clients.openWindow(urlToOpen);
      })
      .catch(err => log(`Notification click handling error: ${err.message}`))
  );
});

// Handle notification close
self.addEventListener('notificationclose', (event) => {
  log('Notification closed without clicking');
}); 