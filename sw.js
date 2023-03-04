const STATIC_CACHE = "static";
const APP_SHELL =[
    "/",
    "/index.html",
    "/main.js",
    "/Assets/icons/bt_add_to_cart.svg",
    "/Assets/icons/bt_added_to_cart.svg",
    "/Assets/boots.webp",
    "/Assets/boots1.webp",
    "/Assets/boots10.jpg",
    "/Assets/boots2.webp",
    "/Assets/boots3.jpg",
    "/Assets/boots4.jpg",
    "/Assets/boots5.webp",
    "/Assets/boots6.webp",
];

self.addEventListener("install", (e) => {
    console.log("entrada a instalar");
    const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntil(cacheStatic);
});

self.addEventListener("fetch", (e) => {
    console.log("fectch!", e.request);

    e.respondWith(
        caches
        .match(e.request)
         .then(res => res || fetch(e.request))
         .catch(console.log)
    );
})