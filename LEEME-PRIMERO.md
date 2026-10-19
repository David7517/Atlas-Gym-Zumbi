# ATLAS GYM ZUMBI — página completa actualizada

Este proyecto contiene **index.html**, **styles.css**, **script.js** y la carpeta **assets** con:

- `atlas-campana-entrenamiento.webp`: nueva imagen promocional ilustrativa con un joven entrenando en poleas; sustituye el gráfico que no te gustaba.
- `atlas-entrenamiento.webp`: foto real de entrenamiento que compartiste, usada en la portada y galería.
- `atlas-mancuernas.webp`: foto de las mancuernas que compartiste, usada en la galería y horarios.
- `atlas-gym-video.mp4`: video promocional animado, mostrado en formato horizontal 16:9 completo, con controles.
- `atlas-logo.jpg`: logo de ATLAS GYM.

## Cómo actualizar tu web (IMPORTANTE)

1. Descomprime el ZIP y abre la carpeta `atlas-gym-zumbi` descargada.
2. Copia su **contenido** (incluida `assets`) a la carpeta que ya usas en VS Code:
   `C:\Users\ORTEL\Desktop\Atlas gym\atlas-gym-zumbi`
3. Acepta **reemplazar archivos** cuando Windows lo pregunte. **No borres** tu carpeta oculta `.git`, porque mantiene la conexión con GitHub.
4. Guarda y prueba la web con Live Server. Revisa la sección **El gym**, el **video**, los planes y el menú desde el móvil.
5. Desde la terminal de VS Code, situada en la carpeta original `atlas-gym-zumbi`, ejecuta de uno en uno:

```bash
git status
git add .
git commit -m "Actualizar fotos y diseño ATLAS GYM"
git push origin main
```

Netlify desplegará la versión nueva automáticamente si tu proyecto está conectado a GitHub en la rama `main`. Recarga el navegador con Ctrl + F5 después de que termine el deploy.

**No subas el ZIP a GitHub**: sube los archivos descomprimidos desde la carpeta original. Si la terminal dice `nothing to commit`, revisa que copiaste los archivos nuevos en esa carpeta, no en una carpeta distinta.

## Importante antes de compartir oficialmente

- La fotografía promocional del joven es **generada digitalmente** y no muestra necesariamente a un socio real o las instalaciones reales; está identificada como ilustrativa.
- La galería contiene las fotos reales aportadas previamente. Usa imágenes de personas solamente si tienes su autorización.
- Verifica que los horarios, precios, teléfono y ubicación estén vigentes.
