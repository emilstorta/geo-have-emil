const CACHE_NAME = "geohave-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/assets/styles.css",
  "/script.js",
  "/src/assets/hero_image.png",
  "/src/assets/logo.png",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching assets");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Return the cached response if found
      }
      return fetch(event.request).then((networkResponse) => {
        // Optionally cache the new resource
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === "basic"
        ) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      });
    })
  );
});
