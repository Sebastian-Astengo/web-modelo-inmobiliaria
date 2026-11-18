// Web de F Arquitectura & Diseño.
const foto = (ruta, w = 1200) => `${ruta}${w <= 900 ? '-m' : ''}.jpg`;

// Proyectos reales, en el orden de la guía del cliente.
const PROYECTOS = [
  { n: 'Depa Miraflores E.H.', sub: '', c: 'Residencial', f: ['media/proyectos/depa-miraflores-e-h/1', 'media/proyectos/depa-miraflores-e-h/2', 'media/proyectos/depa-miraflores-e-h/3', 'media/proyectos/depa-miraflores-e-h/4', 'media/proyectos/depa-miraflores-e-h/5', 'media/proyectos/depa-miraflores-e-h/6'] },
  { n: 'Depa San Isidro D.J.', sub: '', c: 'Residencial', f: ['media/proyectos/depa-san-isidro-d-j/1', 'media/proyectos/depa-san-isidro-d-j/2', 'media/proyectos/depa-san-isidro-d-j/3', 'media/proyectos/depa-san-isidro-d-j/4'] },
  { n: 'Casa de Playa Km 87 A.C.', sub: '', c: 'Residencial', f: ['media/proyectos/casa-de-playa-km-87-a-c/1', 'media/proyectos/casa-de-playa-km-87-a-c/2'] },
  { n: 'Depa San Isidro C.M.', sub: '', c: 'Residencial', d: 3, f: ['media/proyectos/depa-san-isidro-c-m/3', 'media/proyectos/depa-san-isidro-c-m/1', 'media/proyectos/depa-san-isidro-c-m/2', 'media/proyectos/depa-san-isidro-c-m/4', 'media/proyectos/depa-san-isidro-c-m/5'] },
  { n: 'Depa San Borja A.G.', sub: '', c: 'Residencial', f: ['media/proyectos/depa-san-borja-a-g/1', 'media/proyectos/depa-san-borja-a-g/2', 'media/proyectos/depa-san-borja-a-g/3'] },
  { n: 'Helado de Lima', sub: '', c: 'Comercial', f: ['media/proyectos/helado-de-lima/1', 'media/proyectos/helado-de-lima/2', 'media/proyectos/helado-de-lima/3', 'media/proyectos/helado-de-lima/4', 'media/proyectos/helado-de-lima/5', 'media/proyectos/helado-de-lima/6'] },
  { n: 'ULima Store', sub: '', c: 'Comercial', d: 2, f: ['media/proyectos/ulima-store/1', 'media/proyectos/ulima-store/2', 'media/proyectos/ulima-store/3', 'media/proyectos/ulima-store/4', 'media/proyectos/ulima-store/5'] },
  { n: 'Hikari', sub: '', c: 'Comercial', f: ['media/proyectos/hikari/1', 'media/proyectos/hikari/2', 'media/proyectos/hikari/3'] },
  { n: 'Hotel El Tambo - 2 de Mayo', sub: '', c: 'Comercial', f: ['media/proyectos/hotel-el-tambo/1', 'media/proyectos/hotel-el-tambo/2', 'media/proyectos/hotel-el-tambo/3', 'media/proyectos/hotel-el-tambo/4', 'media/proyectos/hotel-el-tambo/5', 'media/proyectos/hotel-el-tambo/6', 'media/proyectos/hotel-el-tambo/7'] },
  { n: 'Apuesta Total', sub: '', c: 'Corporativo', f: ['media/proyectos/apuesta-total/1', 'media/proyectos/apuesta-total/2'] },
  { n: 'B Capital', sub: '', c: 'Corporativo', f: ['media/proyectos/b-capital/1', 'media/proyectos/b-capital/2', 'media/proyectos/b-capital/3'] },
  { n: 'Alianza Francesa', sub: '', c: 'Corporativo', f: ['media/proyectos/alianza-francesa/1', 'media/proyectos/alianza-francesa/2', 'media/proyectos/alianza-francesa/3', 'media/proyectos/alianza-francesa/4'] },
  { n: 'Piloto Skyline', sub: 'Edifica', c: 'Inmobiliario', d: 4, f: ['media/proyectos/piloto-skyline-edifica/1', 'media/proyectos/piloto-skyline-edifica/2', 'media/proyectos/piloto-skyline-edifica/3', 'media/proyectos/piloto-skyline-edifica/4', 'media/proyectos/piloto-skyline-edifica/5'] },
  { n: 'Piloto Atelier', sub: 'Edifica', c: 'Inmobiliario', f: ['media/proyectos/piloto-atelier-edifica/1', 'media/proyectos/piloto-atelier-edifica/2', 'media/proyectos/piloto-atelier-edifica/3', 'media/proyectos/piloto-atelier-edifica/4', 'media/proyectos/piloto-atelier-edifica/5'] },
  { n: 'Áreas comunes Art 28', sub: 'Edifica', c: 'Inmobiliario', f: ['media/proyectos/areas-comunes-art-28-edifica/1', 'media/proyectos/areas-comunes-art-28-edifica/2'] },
  { n: 'Piloto 1 Art 28', sub: 'Edifica', c: 'Inmobiliario', f: ['media/proyectos/piloto-1-art-28-edifica/1', 'media/proyectos/piloto-1-art-28-edifica/2', 'media/proyectos/piloto-1-art-28-edifica/3', 'media/proyectos/piloto-1-art-28-edifica/4', 'media/proyectos/piloto-1-art-28-edifica/5'] },
  { n: 'Piloto 2 Art 28', sub: 'Edifica', c: 'Inmobiliario', f: ['media/proyectos/piloto-2-art-28-edifica/1', 'media/proyectos/piloto-2-art-28-edifica/2', 'media/proyectos/piloto-2-art-28-edifica/3'] },
  { n: 'Home Office para Ella y Estudio para Él', sub: 'Casacor 2022', c: 'Exposición', f: ['media/proyectos/home-office-para-ella-y-estudio-para-el-casacor-2022/1', 'media/proyectos/home-office-para-ella-y-estudio-para-el-casacor-2022/2', 'media/proyectos/home-office-para-ella-y-estudio-para-el-casacor-2022/3', 'media/proyectos/home-office-para-ella-y-estudio-para-el-casacor-2022/4', 'media/proyectos/home-office-para-ella-y-estudio-para-el-casacor-2022/5'] },
  { n: 'Suite Kohler', sub: 'DIP Restaura 2023', c: 'Exposición', f: ['media/proyectos/suite-kohler-dip-restaura-2023/1', 'media/proyectos/suite-kohler-dip-restaura-2023/2', 'media/proyectos/suite-kohler-dip-restaura-2023/3'] },
  { n: 'Lab Studio', sub: 'Casacor 2023', c: 'Exposición', f: ['media/proyectos/lab-studio-casacor-2023/1', 'media/proyectos/lab-studio-casacor-2023/2', 'media/proyectos/lab-studio-casacor-2023/3', 'media/proyectos/lab-studio-casacor-2023/4', 'media/proyectos/lab-studio-casacor-2023/5'] },
  { n: 'Espacio Lontec', sub: 'Expodeco 2023', c: 'Exposición', f: ['media/proyectos/espacio-lontec-expodeco-2023/1', 'media/proyectos/espacio-lontec-expodeco-2023/2', 'media/proyectos/espacio-lontec-expodeco-2023/3', 'media/proyectos/espacio-lontec-expodeco-2023/4', 'media/proyectos/espacio-lontec-expodeco-2023/5'] },
  { n: 'El Espacio de Arte y Joyas de Gaya', sub: 'Casacor 2025', c: 'Exposición', d: 1, nd: 'Gaya Joyería', e: 'Casacor 2025', f: ['media/proyectos/el-espacio-de-arte-y-joyas-de-gaya-casacor-2025/1', 'media/proyectos/el-espacio-de-arte-y-joyas-de-gaya-casacor-2025/2', 'media/proyectos/el-espacio-de-arte-y-joyas-de-gaya-casacor-2025/3', 'media/proyectos/el-espacio-de-arte-y-joyas-de-gaya-casacor-2025/4'] },
];
const WA_NUM = '51953980858';
const wa = (texto) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(texto)}`;

const FLECHA = '<svg class="fl" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICONO = (d) => `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="${d}" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CRUZ = ICONO('M4 4l10 10M14 4L4 14'), ANT = ICONO('M11 3.5L5.5 9l5.5 5.5'), SIG = ICONO('M7 3.5L12.5 9 7 14.5');

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- Cabecera ---------- */
const cab = $('.cab');
const alDesplazar = () => cab.classList.toggle('baja', scrollY > 12);
addEventListener('scroll', alDesplazar, { passive: true }); alDesplazar();
const hamb = $('.hamb');
const menu = (abrir) => { cab.classList.toggle('abierto', abrir); hamb.setAttribute('aria-expanded', abrir); document.body.classList.toggle('fijo', abrir); };
hamb?.addEventListener('click', () => menu(!cab.classList.contains('abierto')));

/* ---------- Animación de entrada (solo Inicio) ---------- */
const intro = $('.intro');
intro?.addEventListener('animationend', (e) => { if (e.animationName === 'telon') intro.hidden = true; });

/* ---------- Aparición al desplazar ---------- */
const obs = new IntersectionObserver((es) => es.forEach((e) => {
  if (!e.isIntersecting) return;
  const el = e.target; el.classList.add('visto'); obs.unobserve(el);
  // Terminada la entrada, la tarjeta vuelve a sus transiciones normales (sin retraso al pasar el cursor)
  if (el.classList.contains('tarjeta')) setTimeout(() => el.removeAttribute('data-ver'), 1100);
}), { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
const observar = (raiz = document) => $$('[data-ver]', raiz).forEach((el) => obs.observe(el));
observar();

/* ---------- Tarjetas ---------- */
const tarjeta = (p, i, dest) => `
  <button class="tarjeta" data-i="${PROYECTOS.indexOf(p)}" data-cat="${p.c}" style="--d:${[0, 0.07, 0.12][i % 3]}s;--y:${[22, 18, 14][i % 3]}px" aria-label="Ver ${p.n}, ${p.c}">
    <span class="foto"><img src="${foto(p.f[0], 800)}" alt="${p.n}" loading="lazy" decoding="async"><span class="etq">${dest ? (p.e || p.c) : (p.sub || p.c)}</span></span>
    <span class="txt"><span class="nom">${(dest && p.nd) || p.n}</span><span class="ver">Ver proyecto ${FLECHA}</span></span>
  </button>`;

const destacados = $('#destacados');
if (destacados) {
  destacados.innerHTML = PROYECTOS.filter((p) => p.d).sort((x, y) => x.d - y.d).map((p, i) => tarjeta(p, i, true)).join('');
  $$('.tarjeta', destacados).forEach((t) => { t.dataset.ver = ''; });
  observar(destacados);
}

const grilla = $('#grilla');
if (grilla) {
  const pest = $('.pest');
  const cats = [...new Set(PROYECTOS.map((p) => p.c))];
  pest.innerHTML = '<span class="pastilla"></span>' + cats.map((c, i) => `<button class="${i ? '' : 'activa'}" aria-pressed="${!i}" data-cat="${c}">${c}</button>`).join('');
  const pastilla = $('.pastilla', pest);
  const moverPastilla = () => {
    const b = $('.activa', pest);
    // La pastilla sigue al botón también cuando las categorías ocupan más de una fila (teléfono)
    pastilla.style.width = b.offsetWidth + 'px';
    pastilla.style.height = b.offsetHeight + 'px';
    pastilla.style.transform = `translate(${b.offsetLeft}px, ${b.offsetTop}px)`;
  };
  let espera;
  const pintar = (cat, primera) => {
    const lista = PROYECTOS.filter((p) => cat === 'Todas' || p.c === cat);
    grilla.innerHTML = lista.map((p, i) => tarjeta(p, i)).join('');
    // Primera carga: entrada escalonada al desplazar. Al filtrar: todas juntas, rápido.
    if (primera) { $$('.tarjeta', grilla).forEach((t) => { t.dataset.ver = ''; }); observar(grilla); }
    else $$('.tarjeta', grilla).forEach((t) => t.classList.add('entra'));
  };
  pest.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b || b.classList.contains('activa')) return;
    const antes = $('.activa', pest); antes.classList.remove('activa'); antes.setAttribute('aria-pressed', 'false');
    b.classList.add('activa'); b.setAttribute('aria-pressed', 'true'); moverPastilla();
    b.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    $$('.tarjeta', grilla).forEach((t) => t.classList.add('sale'));
    clearTimeout(espera); espera = setTimeout(() => pintar(b.dataset.cat), 140);
  });
  pintar(cats[0], true);
  (document.fonts?.ready || Promise.resolve()).then(moverPastilla);
  addEventListener('resize', moverPastilla);
}

/* ---------- Pop-up de proyecto ---------- */
const velo = document.createElement('div');
velo.className = 'velo';
velo.innerHTML = '<div class="popup" role="dialog" aria-modal="true" aria-labelledby="pp-t"></div>';
document.body.append(velo);
const popup = $('.popup', velo);
let volverA = null, actual = 0, total = 0;

const mostrarFoto = (k) => {
  actual = (k + total) % total;
  const ims = $$('.gal img', popup);
  // Solo se descargan la foto visible y la siguiente; el resto, cuando se piden
  [actual, (actual + 1) % total].forEach((k) => { const im = ims[k]; if (im && im.dataset.src) { im.src = im.dataset.src; im.removeAttribute('data-src'); } });
  ims.forEach((im, j) => im.classList.toggle('on', j === actual));
  $$('.minis button', popup).forEach((b, j) => b.classList.toggle('on', j === actual));
};

function abrir(i, desde) {
  const p = PROYECTOS[i]; volverA = desde; total = p.f.length;
  popup.innerHTML = `
    <button class="cerrar" aria-label="Cerrar">${CRUZ}</button>
    <div class="gal">
      ${p.f.map((id, j) => `<img ${j ? 'data-src' : 'src'}="${foto(id, 1400)}" decoding="async" alt="${p.n}, imagen ${j + 1}">`).join('')}
      <button class="fle a" aria-label="Imagen anterior">${ANT}</button><button class="fle s" aria-label="Imagen siguiente">${SIG}</button>
    </div>
    <div class="minis">${p.f.map((id, j) => `<button data-k="${j}" aria-label="Ver imagen ${j + 1}"><img src="${foto(id, 200)}" alt=""></button>`).join('')}</div>
    <div class="cuerpo">
      <div class="cat">${p.c}${p.sub ? ' · ' + p.sub : ''}</div>
      <h2 id="pp-t">${p.n}</h2>
      <a class="btn" href="${wa(`Hola, quisiera información sobre ${p.n}.`)}" target="_blank" rel="noopener">Consultar por WhatsApp ${FLECHA}</a>
    </div>`;
  mostrarFoto(0);
  popup.scrollTop = 0;
  menu(false); fondo(true);
  velo.classList.add('abre'); document.body.classList.add('fijo');
  // El foco pasa al pop-up apenas el velo empieza a verse (antes, el navegador lo rechaza)
  setTimeout(() => { if (velo.classList.contains('abre')) $('.cerrar', popup)?.focus({ preventScroll: true }); }, 60);
}
const CHECK = '<svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="12" stroke="currentColor" stroke-width="1.6"/><path d="M7.5 13.5l3.8 3.8 7.2-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Mientras el pop-up está abierto, el resto de la página queda fuera del foco y de los lectores de pantalla
const fondo = (inerte) => [...document.body.children].forEach((el) => { if (el !== velo) el.inert = inerte; });

function cerrar() {
  velo.classList.remove('abre'); document.body.classList.remove('fijo'); fondo(false);
  volverA?.focus({ preventScroll: true });
}

document.addEventListener('click', (e) => {
  const t = e.target.closest('.tarjeta');
  if (t) abrir(+t.dataset.i, t);
});
velo.addEventListener('click', (e) => {
  if (e.target === velo || e.target.closest('.cerrar')) return cerrar();
  if (e.target.closest('.fle.a')) return mostrarFoto(actual - 1);
  if (e.target.closest('.fle.s')) return mostrarFoto(actual + 1);
  const m = e.target.closest('.minis button'); if (m) return mostrarFoto(+m.dataset.k);
});
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cab.classList.contains('abierto')) { menu(false); hamb.focus(); }
  if (!velo.classList.contains('abre')) return;
  if (e.target.matches?.('input, textarea') && e.key !== 'Escape') return;
  if (e.key === 'Escape') cerrar();
  if (e.key === 'ArrowLeft') mostrarFoto(actual - 1);
  if (e.key === 'ArrowRight') mostrarFoto(actual + 1);
});

/* ---------- Formularios (simulados) ---------- */
document.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target; const ok = $('.ok', f);
  if (!ok || f.hasAttribute('data-libro')) return;
  ok.classList.add('si'); $('button[type=submit]', f).disabled = true;
  ok.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
$$('[data-check]').forEach((el) => { el.innerHTML = CHECK + el.innerHTML; });

/* ---------- Compartir (Inicio) ---------- */
const compartir = $('[data-compartir]');
compartir?.addEventListener('click', async () => {
  const datos = { title: document.title, url: location.href };
  const nota = $('.aviso-copia');
  const decir = (t) => { nota.textContent = t; nota.classList.add('si'); setTimeout(() => nota.classList.remove('si'), 2200); };
  try {
    if (navigator.share) await navigator.share(datos);
    else { await navigator.clipboard.writeText(datos.url); decir('Enlace copiado'); }
  } catch (e) { if (e.name !== 'AbortError') decir('No se pudo compartir'); }
});

/* ---------- Cookies: nada de analítica se carga sin aceptación ---------- */
const cookies = $('.cookies');
const leer = () => { try { return localStorage.getItem('cookies'); } catch (e) { return null; } };
const activarPublicidad = () => {
  // PENDIENTE (sesión de anuncios): cargar aquí el píxel de Meta y la etiqueta de Google Ads con sus ID.
  // Solo se llama cuando la persona eligió «Aceptar publicidad». Las estadísticas de Cloudflare no usan cookies
  // y se activan desde el panel de Cloudflare Pages, sin código.
};
if (cookies) {
  if (!leer() || leer() === 'analitica') cookies.hidden = false; else if (leer() === 'publicidad') activarPublicidad();
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-cookies-abrir]')) { cookies.hidden = false; $('button', cookies).focus(); return; }
    const b = e.target.closest('[data-cookies]'); if (!b) return;
    try { localStorage.setItem('cookies', b.dataset.cookies); } catch (err) {}
    if (b.dataset.cookies === 'publicidad') activarPublicidad();
    cookies.hidden = true;
  });
}

/* ---------- Carruseles: portada del Inicio (fotos) y Nosotros (video de 5 s y luego fotos) ----------
   Avanzan solos. Flechas discretas en escritorio; en teléfono se pasan con el dedo. */
$$('.carrusel').forEach((car) => {
  const lams = $$('.lam', car), ctrl = $('.car-ctrl', car), credito = $('.credito', car);
  const FOTO = car.classList.contains('portada') ? 5000 : 4000, VIDEO = 5000;
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const video = $('video', lams[0]), ruta = video && lams[0].dataset.video;
  if (ruta) { video.src = ruta; lams[0].classList.add('con-video'); }
  const nombre = (l, k) => $('video', l) ? 'Ver video' : 'Ver imagen ' + (k + (video ? 0 : 1));
  ctrl.innerHTML = `<button type="button" class="car-fle" data-dir="-1" aria-label="Anterior">${ANT}</button>
    <div class="car-puntos">${lams.map((l, k) => `<button type="button" aria-label="${nombre(l, k)}"></button>`).join('')}</div>
    <button type="button" class="car-fle" data-dir="1" aria-label="Siguiente">${SIG}</button>`;
  const bs = $$('.car-puntos button', ctrl);
  car.classList.toggle('quieto', quieto);
  let i = 0, reloj;
  const ir = (k) => {
    clearTimeout(reloj);
    i = (k + lams.length) % lams.length;
    const dur = $('video', lams[i]) ? VIDEO : FOTO;
    lams.forEach((l, n) => l.classList.toggle('on', n === i));
    if (credito && lams[i].dataset.credito) credito.textContent = lams[i].dataset.credito;
    bs.forEach((b, n) => { b.classList.remove('on'); b.classList.toggle('visto', n < i); b.style.setProperty('--dur', dur + 'ms'); });
    void ctrl.offsetWidth; bs[i].classList.add('on');
    if (ruta) { if (i === 0) { video.currentTime = 0; video.play().catch(() => {}); } else video.pause(); }
    if (!quieto && !document.hidden) reloj = setTimeout(() => ir(i + 1), dur);
  };
  ctrl.addEventListener('click', (e) => {
    const f = e.target.closest('.car-fle'); if (f) return ir(i + +f.dataset.dir);
    const b = e.target.closest('.car-puntos button'); if (b) ir(bs.indexOf(b));
  });
  // Deslizar con el dedo
  let x0 = null, y0 = 0;
  car.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') { x0 = e.clientX; y0 = e.clientY; } });
  car.addEventListener('pointerup', (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0, dy = e.clientY - y0; x0 = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) ir(i + (dx < 0 ? 1 : -1));
  });
  car.addEventListener('pointercancel', () => { x0 = null; });
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearTimeout(reloj); else ir(i); });
  ir(0);
});

/* ---------- Contacto: armador del mensaje de WhatsApp (sin formulario) ---------- */
const armador = $('[data-armador]');
if (armador) {
  const MOTIVOS = {
    cotizar: ['Hola, quisiera cotizar un proyecto.', 'Cotiza por WhatsApp'],
    informacion: ['Hola, quisiera más información.', 'Contáctanos por WhatsApp'],
    otra: ['Hola, tengo una consulta.', 'Contáctanos por WhatsApp'],
  };
  const cajaCat = $('[data-categorias]', armador), vista = $('[data-vista]', armador);
  const enviar = $('[data-enviar]', armador), etiqueta = $('[data-etiqueta]', armador);
  cajaCat.innerHTML = [...new Set(PROYECTOS.map((p) => p.c))].map((c) => `<button type="button" class="chip" aria-pressed="false" data-cat="${c}">${c}</button>`).join('');
  let motivo = 'cotizar', cat = '';
  const armar = () => {
    const TIPO = { 'Exposición': 'de exposición' };
    const texto = MOTIVOS[motivo][0] + (cat ? ` Es un proyecto ${TIPO[cat] || cat.toLowerCase()}.` : '');
    vista.textContent = texto; vista.classList.remove('cambia'); void vista.offsetWidth; vista.classList.add('cambia');
    enviar.href = wa(texto); etiqueta.textContent = MOTIVOS[motivo][1];
  };
  armador.addEventListener('click', (e) => {
    const b = e.target.closest('.chip'); if (!b) return;
    if (b.dataset.motivo) motivo = b.dataset.motivo;
    else cat = cat === b.dataset.cat ? '' : b.dataset.cat;   // la categoría se puede quitar tocándola de nuevo
    $$('.chip', armador).forEach((c) => {
      const on = c.dataset.motivo ? c.dataset.motivo === motivo : c.dataset.cat === cat;
      c.classList.toggle('on', on); c.setAttribute('aria-pressed', on);
    });
    armar();
  });
}

/* ---------- Carga anticipada: al acercar el cursor o tocar una tarjeta, se pide ya su primera foto grande ---------- */
const pedidas = new Set();
const anticipar = (e) => {
  const t = e.target.closest?.('.tarjeta'); if (!t) return;
  const p = PROYECTOS[+t.dataset.i]; if (!p || pedidas.has(p.f[0])) return;
  pedidas.add(p.f[0]); new Image().src = foto(p.f[0], 1400);
};
document.addEventListener('pointerover', anticipar, { passive: true });
document.addEventListener('touchstart', anticipar, { passive: true });

/* ---------- Libro de Reclamaciones ----------
   LIBRO_ENDPOINT: dirección del servicio que recibe la hoja y la envía por correo al estudio y al consumidor.
   PENDIENTE: se completa cuando se elija el servicio de envío. Mientras esté vacío, la hoja NO se envía
   y la web lo dice con claridad (no aparece como enviada). */
const LIBRO_ENDPOINT = '';
const libro = $('[data-libro]');
if (libro) {
  const ok = $('.ok', libro), okTxt = $('.ok-txt', libro), err = $('.libro-error', libro), boton = $('button[type=submit]', libro);
  const marcar = (el, mal) => (el.closest('.campo') || el.closest('.opciones'))?.classList.toggle('mal', mal);
  libro.addEventListener('input', (e) => marcar(e.target, false));
  libro.addEventListener('submit', async (e) => {
    e.preventDefault();
    if ($('.trampa', libro).value) return;                       // trampa para robots
    err.hidden = true;
    const faltan = [...libro.elements].filter((el) => el.name && el.willValidate && !el.checkValidity());
    $$('.mal', libro).forEach((x) => x.classList.remove('mal'));
    if (faltan.length) {
      faltan.forEach((el) => marcar(el, true));
      err.textContent = 'Faltan datos obligatorios o alguno no es válido. Revisa los campos marcados.';
      err.hidden = false; faltan[0].focus(); return;
    }
    const datos = Object.fromEntries(new FormData(libro)); delete datos.sitio_web;
    datos.fecha = new Date().toLocaleString('es-PE', { dateStyle: 'long', timeStyle: 'short', timeZone: 'America/Lima' });
    datos.proveedor = 'F ARQUITECTURA & DISEÑO E.I.R.L. · RUC 20604527393 · Central Tower, Av. El Derby 254, Lima 15023';
    if (!LIBRO_ENDPOINT) {
      err.textContent = 'El envío de hojas de reclamación todavía no está activado en esta web: tu hoja NO se ha enviado. Mientras tanto, escríbenos a fernandoap@farqdis.com o por WhatsApp al +51 953 980 858.';
      err.hidden = false; return;
    }
    boton.disabled = true; boton.classList.add('cargando');
    try {
      const r = await fetch(LIBRO_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(datos) });
      const resp = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(resp.error || 'No se pudo enviar');
      okTxt.innerHTML = `<b>Hoja de reclamación enviada.</b>${resp.codigo ? 'N.º de registro: ' + resp.codigo + '. ' : ''}Te enviaremos una copia a ${datos.correo}. Responderemos en un plazo máximo de 15 días hábiles.`;
      ok.classList.add('si'); ok.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      libro.querySelectorAll('input,textarea,select').forEach((x) => { x.disabled = true; });
    } catch (x) {
      err.textContent = 'No se pudo enviar la hoja. Inténtalo otra vez o escríbenos a fernandoap@farqdis.com.';
      err.hidden = false; boton.disabled = false;
    } finally { boton.classList.remove('cargando'); }
  });
}
