self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response; // return the cached response
          }
          return fetch(event.request); // fetch from network
        })
    );
  });
  