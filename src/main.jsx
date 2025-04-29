import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Register service worker
if ('serviceWorker' in navigator) {
  // First, unregister any existing service workers
  navigator.serviceWorker.getRegistrations().then(async (registrations) => {
    for (const registration of registrations) {
      await registration.unregister();
      console.log('Unregistered old service worker');
    }

    // Then register the new service worker
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          '/service-worker.js',
          {
            scope: '/',
            updateViaCache: 'none',
          }
        );
        console.log(
          'ServiceWorker registration successful. Scope:',
          registration.scope
        );

        // Handle PWA install prompt
        let deferredPrompt;
        window.addEventListener('beforeinstallprompt', (e) => {
          // Prevent Chrome 67 and earlier from automatically showing the prompt
          e.preventDefault();
          // Stash the event so it can be triggered later
          deferredPrompt = e;
          console.log('Install prompt ready to be shown');
        });
      } catch (error) {
        console.error('ServiceWorker registration failed:', error);
      }
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
