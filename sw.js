const CACHE='milk-khata-v22-shell';
const FILES=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{if(r.ok){let c=r.clone();caches.open(CACHE).then(k=>k.put(e.request,c));}return r;}).catch(()=>caches.match('./index.html'))));});
