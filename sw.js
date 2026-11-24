const C='vl-cache-1';
self.addEventListener('install',e=>{self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{
const r=e.request;if(r.method!=='GET')return;
const u=new URL(r.url);if(u.origin!==location.origin)return;
e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp)).catch(()=>{});}return res;}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||Response.error())));
});
