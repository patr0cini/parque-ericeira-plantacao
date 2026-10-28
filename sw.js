// Service worker do mapa de plantação — guarda a página, as fotos e os tipos de letra para usar sem rede.
const VERSAO = '281020261659';
const PAGINA = 'pagina-' + VERSAO, FOTOS = 'fotos-v1', FONTES = 'fontes-v1';
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap';
const BASE = ['./', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(PAGINA);
    await c.addAll(BASE.map(u => new Request(u, { cache: 'reload' })));
    try {
      const f = await caches.open(FONTES);
      const r = await fetch(FONT_CSS, { mode: 'cors' });
      if (r.ok) {
        const css = await r.clone().text();
        await f.put(FONT_CSS, r);
        const urls = [...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map(m => m[1]);
        await Promise.all(urls.map(u => fetch(u, { mode: 'cors' }).then(x => x.ok && f.put(u, x)).catch(() => {})));
      }
    } catch (_) { /* sem tipos de letra guardados: a página usa os do sistema */ }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('pagina-') && k !== PAGINA) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (r.mode === 'navigate') { e.respondWith(pagina(r)); return; }
  if (u.origin === location.origin && u.pathname.includes('/fotos/')) { e.respondWith(primeiroCache(FOTOS, r, false)); return; }
  if (u.host === 'fonts.googleapis.com' || u.host === 'fonts.gstatic.com') { e.respondWith(primeiroCache(FONTES, r, true)); return; }
  if (u.origin === location.origin) { e.respondWith(caches.match(r, { ignoreSearch: true }).then(m => m || fetch(r))); }
});

// Página: tenta a rede (para receber atualizações); sem rede ou a demorar, usa a cópia guardada.
async function pagina(r) {
  const c = await caches.open(PAGINA);
  try {
    const net = await Promise.race([
      fetch(r),
      new Promise((_, no) => setTimeout(() => no(new Error('lento')), 4000))
    ]);
    if (net && net.ok) { c.put('./', net.clone()); return net; }
    throw new Error('resposta inválida');
  } catch (_) {
    return (await c.match('./')) || (await caches.match(r, { ignoreSearch: true })) || Response.error();
  }
}

async function primeiroCache(nome, r, cors) {
  const c = await caches.open(nome);
  const m = await c.match(r, { ignoreVary: true, ignoreSearch: !cors });
  if (m) return m;
  try {
    const n = await fetch(cors ? new Request(r.url, { mode: 'cors' }) : r);
    if (n.ok) c.put(r, n.clone());
    return n;
  } catch (err) {
    return Response.error();
  }
}
