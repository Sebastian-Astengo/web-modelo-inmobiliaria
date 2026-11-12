// Web modelo (boceto A). Todo el contenido es de ejemplo: nombres, textos e imágenes
// se reemplazan por los datos reales de la inmobiliaria.
const foto = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

const PROYECTOS = [
  { n: 'Proyecto Uno',    c: 'Categoría 1', f: ['1600585154340-be6161a56a0c', '1600607687939-ce8a6c25118c', '1600566753190-17f0baa2a6c3', '1600210492486-724fe5c67fb0'] },
  { n: 'Proyecto Dos',    c: 'Categoría 2', f: ['1545324418-cc1a3fa10c00', '1502672260266-1c1ef2d93688', '1522708323590-d24dbb6b0267', '1493809842364-78817add7ffb'] },
  { n: 'Proyecto Tres',   c: 'Categoría 1', f: ['1512917774080-9991f1c4c750', '1560448204-e02f11c3d0e2', '1600566753190-17f0baa2a6c3', '1600607687939-ce8a6c25118c'] },
  { n: 'Proyecto Cuatro', c: 'Categoría 3', f: ['1486406146926-c627a92ad1ab', '1497366216548-37526070297c', '1487958449943-2429e8be8625', '1479839672679-a46483c0e7c8'] },
  { n: 'Proyecto Cinco',  c: 'Categoría 2', f: ['1600596542815-ffad4c1539a9', '1493809842364-78817add7ffb', '1560448204-e02f11c3d0e2', '1502672260266-1c1ef2d93688'] },
  { n: 'Proyecto Seis',   c: 'Categoría 1', f: ['1613490493576-7fde63acd811', '1600210492486-724fe5c67fb0', '1522708323590-d24dbb6b0267', '1600607687939-ce8a6c25118c'] },
  { n: 'Proyecto Siete',  c: 'Categoría 3', f: ['1487958449943-2429e8be8625', '1497366216548-37526070297c', '1486406146926-c627a92ad1ab', '1479839672679-a46483c0e7c8'] },
  { n: 'Proyecto Ocho',   c: 'Categoría 2', f: ['1564013799919-ab600027ffc6', '1560448204-e02f11c3d0e2', '1600566753190-17f0baa2a6c3', '1493809842364-78817add7ffb'] },
  { n: 'Proyecto Nueve',  c: 'Categoría 1', f: ['1479839672679-a46483c0e7c8', '1502672260266-1c1ef2d93688', '1600210492486-724fe5c67fb0', '1522708323590-d24dbb6b0267'] },
];
const RESUMEN = 'Descripción breve de ejemplo: aquí va una frase sobre el proyecto.';
const DESCRIPCION = 'Texto de ejemplo. Aquí va la descripción real del proyecto: qué es, dónde está, a quién está dirigido y qué lo hace especial. La inmobiliaria define este contenido.';

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
const menu = (abrir) => { cab.classList.toggle('abierto', abrir); hamb.setAttribute('aria-expanded', abrir); };
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
const tarjeta = (p, i) => `
  <button class="tarjeta" data-i="${PROYECTOS.indexOf(p)}" data-cat="${p.c}" style="--d:${[0, 0.07, 0.12][i % 3]}s;--y:${[22, 18, 14][i % 3]}px" aria-label="Ver ${p.n}, ${p.c}">
    <span class="foto"><img src="${foto(p.f[0], 800)}" alt="Imagen de muestra de ${p.n}" loading="lazy" decoding="async"><span class="etq">${p.c}</span></span>
    <span class="txt"><span class="nom">${p.n}</span><span class="res">${RESUMEN}</span><span class="ver">Ver proyecto ${FLECHA}</span></span>
  </button>`;

const destacados = $('#destacados');
if (destacados) {
  destacados.innerHTML = PROYECTOS.slice(0, 3).map((p, i) => tarjeta(p, i)).join('');
  $$('.tarjeta', destacados).forEach((t) => { t.dataset.ver = ''; });
  observar(destacados);
}

const grilla = $('#grilla');
if (grilla) {
  const pest = $('.pest');
  const cats = ['Todas', ...new Set(PROYECTOS.map((p) => p.c))];
  pest.innerHTML = '<span class="pastilla"></span>' + cats.map((c, i) => `<button class="${i ? '' : 'activa'}" aria-pressed="${!i}" data-cat="${c}">${c}</button>`).join('');
  const pastilla = $('.pastilla', pest);
  const moverPastilla = () => {
    const b = $('.activa', pest);
    pastilla.style.width = b.offsetWidth + 'px';
    pastilla.style.transform = `translateX(${b.offsetLeft}px)`;
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
  pintar('Todas', true);
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
  $$('.gal img', popup).forEach((im, j) => im.classList.toggle('on', j === actual));
  $$('.minis button', popup).forEach((b, j) => b.classList.toggle('on', j === actual));
};

function abrir(i, desde) {
  const p = PROYECTOS[i]; volverA = desde; total = p.f.length;
  popup.innerHTML = `
    <button class="cerrar" aria-label="Cerrar">${CRUZ}</button>
    <div class="gal">
      ${p.f.map((id, j) => `<img src="${foto(id, 1400)}" alt="Imagen de muestra ${j + 1} de ${p.n}">`).join('')}
      <button class="fle a" aria-label="Imagen anterior">${ANT}</button><button class="fle s" aria-label="Imagen siguiente">${SIG}</button>
    </div>
    <div class="minis">${p.f.map((id, j) => `<button data-k="${j}" aria-label="Ver imagen ${j + 1}"><img src="${foto(id, 200)}" alt=""></button>`).join('')}</div>
    <div class="cuerpo">
      <div class="cat">${p.c}</div>
      <h2 id="pp-t">${p.n}</h2>
      <p>${DESCRIPCION}</p>
      <div class="fichas"><div><small>Ubicación</small>A definir</div><div><small>Estado</small>A definir</div><div><small>Características</small>A definir</div></div>
      <button class="btn" data-consultar>Consultar por este proyecto ${FLECHA}</button>
      <div class="plegable"><div>
        <form>
          <div class="campo"><input id="c-n" name="nombre" autocomplete="name" placeholder=" " required><label for="c-n">Nombre</label></div>
          <div class="campo"><input id="c-c" name="contacto" autocapitalize="none" placeholder=" " required><label for="c-c">Correo o teléfono</label></div>
          <div class="campo"><textarea id="c-m" placeholder=" ">Hola, quisiera más información sobre ${p.n}.</textarea><label for="c-m">Mensaje</label></div>
          <button class="btn" type="submit">Enviar consulta</button>
          <div class="ok" role="status" style="margin-top:16px">${CHECK}<span>Consulta enviada (simulación: en el modelo no se envía nada).</span></div>
        </form>
      </div></div>
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
  const c = e.target.closest('[data-consultar]');
  if (c) {
    const pl = $('.plegable', popup); pl.classList.add('abre'); c.style.display = 'none';
    setTimeout(() => { $('#c-n', popup).focus({ preventScroll: true }); pl.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 350);
  }
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
  if (!ok) return;
  ok.classList.add('si'); $('button[type=submit]', f).disabled = true;
  ok.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
$$('[data-check]').forEach((el) => { el.innerHTML = CHECK + el.innerHTML; });
