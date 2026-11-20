/* No precache and no HTML cache: a visit always receives current contact links. */
const CACHE = "arkaim-static-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    await Promise.all(keys.filter((key) => key.startsWith("arkaim-static-") && key !== CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
  }));
});
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  // Never intercept navigation, API, personal-data URLs, or third-party traffic.
  if (request.method !== "GET" || url.origin !== self.location.origin ||
      request.mode === "navigate" || url.search ||
      !/\/assets\/[^/]+-[\w-]+\.(?:js|css)$/.test(url.pathname)) return;
  event.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(request);
    if (cached) return cached;
    const response = await fetch(request);
    if (response.ok && response.type === "basic") {
      await cache.put(request, response.clone());
      const keys = await cache.keys();
      if (keys.length > 60) await cache.delete(keys[0]);
    }
    return response;
  }));
});
