const CACHE_NAME = 'siber-macera-v1.0';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './assets/Asset 4.svg',
  './assets/Asset 5.svg',
  './assets/Asset 9.svg',
  './assets/Asset 10.svg',
  './assets/Asset 11.svg',
  './assets/Asset 12.svg',
  './assets/Asset 13.svg',
  './assets/Asset 14.svg',
  './assets/Asset 15.svg',
  './assets/Asset 21.svg',
  './assets/Asset 22.svg',
  './assets/Asset 23.svg',
  './assets/Asset 26.svg',
  './assets/Asset 27.svg',
  './assets/Asset 28.svg',
  './assets/Asset 29.svg',
  './assets/Asset 30.svg',
  './assets/Asset 31.svg',
  './assets/Asset 32.svg',
  './assets/Asset 33.svg',
  './assets/Asset 34.svg',
  './assets/Asset 35.svg',
  './assets/Asset 36.svg',
  './assets/Asset 6.svg',
  './assets/oltalamatestinegec.svg',
  './assets/oyungirisekranı.svg',
  './fonts/Gilmer Regular.otf',
  './fonts/Gilmer Light.otf',
  './fonts/Gilmer Bold.otf',
  './fonts/conthrax-sb.otf'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  console.log('🔧 Service Worker: Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('📦 Service Worker: Cache açıldı');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('✅ Service Worker: Tüm dosyalar cache edildi');
        // Force the waiting service worker to become the active service worker
        return self.skipWaiting();
      })
      .catch(function(error) {
        console.error('❌ Service Worker: Cache hatası:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  console.log('🚀 Service Worker: Activate event');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Service Worker: Eski cache siliniyor:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      // Take control of all clients immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          console.log('📂 Service Worker: Cache\'ten servis ediliyor:', event.request.url);
          return response;
        }
        
        // Clone the request because it can only be used once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(function(response) {
          // Check if response is valid
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response because it can only be used once
          const responseToCache = response.clone();
          
          // Add to cache for future use (only cache GET requests)
          if (event.request.method === 'GET') {
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
          }
          
          return response;
        }).catch(function() {
          // If fetch fails, try to return a fallback
          if (event.request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
      })
  );
});

// Background sync for offline score saving (when online again)
self.addEventListener('sync', function(event) {
  if (event.tag === 'background-sync-scores') {
    console.log('🔄 Service Worker: Background sync - skorlar senkronize ediliyor');
    // Here you could implement offline score queuing
  }
});

// Push notification support (for future use)
self.addEventListener('push', function(event) {
  if (event.data) {
    const data = event.data.json();
    console.log('📬 Service Worker: Push notification:', data);
    
    const title = data.title || 'Siber Macera';
    const options = {
      body: data.body || 'Yeni bir bildirim var!',
      icon: './assets/Asset 5.svg',
      badge: './assets/Asset 5.svg',
      vibrate: [100, 50, 100],
      data: data
    };
    
    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  console.log('🔔 Service Worker: Notification click');
  event.notification.close();
  
  // Open the app when notification is clicked
  event.waitUntil(
    clients.openWindow('./')
  );
});

console.log('🎮 Siber Macera Service Worker başlatıldı - Teknofest Edition'); 