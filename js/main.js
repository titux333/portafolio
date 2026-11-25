// Menú móvil
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Año automático en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Formulario: abre tu correo con el mensaje armado.
// CAMBIÁ este email por el tuyo. Más adelante podés usar Formspree o Netlify Forms.
const EMAIL = 'tituxandronicux333@gmail.com';
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const asunto = encodeURIComponent('Consulta desde tu portafolio - ' + f.get('nombre'));
  const cuerpo = encodeURIComponent(f.get('mensaje') + '\n\n' + f.get('nombre') + ' (' + f.get('email') + ')');
  window.location.href = `mailto:${EMAIL}?subject=${asunto}&body=${cuerpo}`;
});
