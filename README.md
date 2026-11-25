# Plantilla de portafolio

Sitio estático (HTML + CSS + JavaScript), sin dependencias ni instalación.

## Estructura
- `index.html`: el contenido de la página
- `css/style.css`: estilos (colores y fuentes en `:root`, arriba de todo)
- `js/main.js`: menú móvil, año del footer y formulario
- `img/`: tus imágenes (`proyecto-1.jpg`, `proyecto-2.jpg`, `proyecto-3.jpg`)

## Cómo personalizarla
1. Abrí la carpeta en Visual Studio Code (Archivo > Abrir carpeta).
2. Buscá con Ctrl+Shift+F el texto `Tu Nombre`, `tu@email.com`, `tu-usuario` y `XXXXXXXXXX` y reemplazalos por tus datos.
3. Editá los servicios y proyectos en `index.html` (copiá y pegá un bloque `<article class="project">` para sumar más).
4. Cambiá la paleta en `css/style.css`, variables `--accent`, `--bg`, `--ink`.
5. Cambiá `EMAIL` en `js/main.js`.

## Probarla
Instalá la extensión **Live Server** en VS Code, clic derecho sobre `index.html` > Open with Live Server.

## Publicarla gratis
- **GitHub Pages**: subí la carpeta a un repositorio y activá Pages en Settings.
- **Netlify** o **Vercel**: arrastrá la carpeta o conectá el repositorio.
