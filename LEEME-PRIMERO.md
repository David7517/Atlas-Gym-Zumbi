# ATLAS GYM ZUMBI — Página web

Proyecto educativo de una página moderna, adaptable al celular y construida con **HTML, CSS y JavaScript**. No requiere instalación de dependencias ni base de datos.

## PASO 1 — Descarga y descomprime
Descarga `ATLAS_GYM_ZUMBI_WEB.zip` y extrae la carpeta `atlas-gym-zumbi`.

## PASO 2 — Abre el proyecto en Visual Studio Code
En VS Code: **Archivo > Abrir carpeta** y selecciona `atlas-gym-zumbi`.

Dentro verás:

```text
atlas-gym-zumbi/
├── index.html                 ← Toda la estructura y el contenido
├── styles.css                 ← Diseño, colores, tipografía y versión móvil
├── script.js                  ← Menú, selección de planes y animaciones
├── LEEME-PRIMERO.md           ← Esta guía
└── assets/
    ├── atlas-logo.jpg         ← Logo recortado de la captura que enviaste
    ├── hero-art.svg           ← Ilustración de respaldo
    └── favicon.svg            ← Icono de pestaña
```

## PASO 3 — Ejecuta la página
**Fácil:** Haz doble clic sobre `index.html`; se abrirá en Chrome o tu navegador.

**Recomendado para programar:** Instala en VS Code la extensión **Live Server**. Haz clic derecho sobre `index.html` y selecciona **Open with Live Server**. La página se actualizará mientras edites los archivos.

## PASO 4 — Comprueba que funcione
1. Baja a **Planes** y selecciona cada número de personas: cambia el precio unitario y el total mensual.
2. Revisa el menú de navegación en el celular o reduce el ancho de la ventana de tu navegador.
3. Prueba **Llamar**, **Instagram** y **Abrir en Google Maps** (estos enlaces necesitan internet).
4. Prueba las preguntas desplegables.

## PASO 5 — Personaliza tu página
- **Nombre y textos:** abre `index.html` y edita el texto entre las etiquetas.
- **Colores:** abre `styles.css`, arriba verás `--red: #f52a3d` y `--black: #090a0c`.
- **Precios y calculadora:** abre `script.js` y modifica `plans` si cambian las tarifas. Actualiza también los precios escritos en `index.html`.
- **Horarios, dirección y contacto:** están en `index.html`. Busca `HORARIO DE ATENCIÓN`, `8 de Septiembre` y `099 222 6966`.
- **Logo:** reemplaza `assets/atlas-logo.jpg` por una versión nítida del logo real, conservando el nombre del archivo (o cambia la ruta en el HTML).
- **Foto principal:** la página intenta cargar una foto ilustrativa de Unsplash desde `styles.css` en `.hero-photo`. Puedes sustituir su URL por una fotografía autorizada del gimnasio, guardada por ejemplo en `assets/foto-gym.jpg`. Si no hay internet o la foto no carga, queda la ilustración `hero-art.svg`.
- **Instagram:** busca `instagram.com/atlasgym.zumbi` en `index.html` para cambiar el enlace.

## PASO 6 — Publica la página gratis

**Opción A — Netlify Drop (sin Git):**
1. Entra en https://app.netlify.com/drop y sigue el proceso de inicio de sesión cuando te lo pida.
2. Arrastra **toda la carpeta** `atlas-gym-zumbi` (con `index.html` en la raíz) al área de despliegue.
3. Abre la URL pública que genere el servicio.
4. Cuando cambies algo, vuelve a publicar los archivos actualizados.

**Opción B — GitHub Pages:**
1. Crea un repositorio público nuevo en GitHub, por ejemplo `atlas-gym-zumbi`.
2. Sube los archivos del proyecto a la raíz del repositorio; `index.html` debe quedar en la raíz.
3. En el repositorio, entra en **Settings > Pages**. En **Build and deployment**, elige **Deploy from a branch**, selecciona `main` y la carpeta `/ (root)`, y guarda.
4. Espera a que GitHub termine la publicación y abre la URL que aparezca en la sección Pages.

Guías oficiales: https://docs.github.com/en/pages/quickstart y https://docs.netlify.com/start/overview/

## PASO 7 — Mejoras que podemos programar después
- Galería con fotos reales y videos del local (con permiso).
- Formulario de contacto con validación y envío real.
- Panel de administrador para editar precios y horarios sin entrar al código.
- Reservas, membresías y sistema de usuarios con base de datos (requieren backend, autenticación y hosting).

## Datos usados
Se basan en la captura de Instagram proporcionada, no en una verificación independiente de la empresa:
- Nombre: **ATLAS GYM**, @atlasgym.zumbi.
- Dirección: **8 de Septiembre y Paquisha, Zumbi, Zamora Chinchipe, Ecuador**.
- Número de anuncio: **099 222 6966**. Se ofrece como enlace de llamada; **verifica** que siga vigente.
- Lunes a viernes: **5 AM–11 AM** y **2 PM–10 PM**.
- Sábados: **8 AM–2 PM**.
- Domingo: no consta en la captura, así que se indica "Consultar disponibilidad".
- Mensualidades: **1 persona $20; 2 personas $19 c/u; 3 personas $18 c/u; 4 personas $17 c/u**.

Los montos son demostrativos y deberían confirmarse antes de que el sitio se publique como página oficial. La foto de portada es ilustrativa y **no representa necesariamente las instalaciones reales de ATLAS GYM**.
