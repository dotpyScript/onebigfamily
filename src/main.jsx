import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        '/service-worker.js',
        {
          scope: '/',
        }
      );

      // Check for updates periodically
      setInterval(() => {
        registration.update();
        console.log('Checking for service worker updates');
      }, 1000 * 60 * 60); // Check every hour

      // Handle service worker updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;

        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New service worker available, show notification to user
              console.log('New version available! Ready to update.');
              if (confirm('New version available! Would you like to update?')) {
                window.location.reload();
              }
            } else {
              // First time service worker installation
              console.log('App is ready for offline use.');
            }
          }
        });
      });

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
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
