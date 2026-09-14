# 📸 Pautas de Contenido — Proyecto Web Reformat

Esta guía es para quien esté grabando, escribiendo o diseñando el material
que va a subirse a la página. El objetivo es que, cuando el contenido real
esté listo, encaje perfecto en el sitio sin tener que recortar, comprimir o
reescribir todo de nuevo.

---

## 1. Reglas generales para todo el sitio

- **Nombres de archivo:** en minúsculas, sin espacios ni tildes, separados
  por guiones. Ejemplo: `hero-inicio.jpg`, `videoreel-conocenos.mp4`,
  `perfil-integrante-1.jpg`.
- **Formato de imágenes:** `.jpg` para fotos (más liviano), `.png` solo si
  necesita fondo transparente (como un logo), `.webp` si quieren aún más
  optimización.
- **Peso de archivos:** ninguna imagen debería pesar más de **500 KB**.
  Herramientas gratuitas para comprimir: [squoosh.app](https://squoosh.app) o
  [tinypng.com](https://tinypng.com).
- **Videos:** formato `.mp4` (códec H.264), resolución **1920×1080 (Full
  HD)** máximo — no hace falta 4K, pesa mucho más y no se nota la diferencia
  en la web. Si el video pesa más de 20-30 MB, mejor subirlo a YouTube/Vimeo
  como "no listado" e incrustarlo, en lugar de subir el archivo directo.
- **Alt text (texto alternativo):** toda imagen debe tener una frase corta
  describiéndola (para accesibilidad y SEO). Ejemplo: `alt="Equipo de
  Reformat grabando un video en exteriores"`.

---

## 2. Pautas por sección

### Inicio (Hero)
- **Imagen principal:** horizontal, mínimo 1600×900 px, que muestre al
  equipo o el trabajo de Reformat en acción (evitar imágenes muy oscuras o
  con mucho texto encima).
- **Texto de introducción:** 2-3 frases cortas (máximo ~40 palabras). Debe
  decir *quiénes son* y *qué hacen*, no la historia completa.

### Líneas (Audiovisual, Animación, Mapping, Videomapping, Web/App)
Cada línea necesita, por separado:
- **Descripción de la línea:** 1 párrafo corto (3-4 líneas) explicando de
  qué trata esa línea específica.
- **Proyectos:** por cada proyecto — nombre, 1-2 líneas de descripción, y
  una imagen o miniatura de video en formato **cuadrado o 4:3** (para que
  las tarjetas se vean parejas).
- **Integrantes de la línea:** foto tipo retrato (formato cuadrado 1:1,
  mínimo 400×400 px) + nombre. Fondo neutro o similar entre todos para que
  la grilla se vea uniforme.
- **Videoreel/Presentación de la línea** (si aplica): mismo estándar de
  video que el de "Conócenos" (ver abajo).

### Conócenos
- **Videoreel institucional:** duración recomendada **60-90 segundos**
  (los reels largos pierden a quien los ve). 1920×1080, mp4.
- **Presentación:** texto de 2-3 párrafos cortos sobre qué es el semillero,
  su misión, y qué lo hace diferente.
- **Foto de equipo:** una sola foto grupal, horizontal, buena luz.
- **Perfiles:** mismo estándar que "Integrantes de la línea" (foto cuadrada,
  nombre, y opcionalmente el rol de la persona).

### Noticias
- **Estructura de cada noticia:** título (máximo ~10 palabras), fecha,
  imagen de portada (horizontal, 1200×630 px — ese tamaño también sirve
  para cuando se comparta en redes sociales), y el cuerpo del texto.
- **Longitud sugerida:** 150-400 palabras por noticia. Si es más largo,
  dividirlo en varias noticias o usar subtítulos.
- **Tono:** informativo y cercano, como le hablarían a un estudiante
  interesado en unirse, no un comunicado formal de prensa.

### Contacto
- No necesita contenido multimedia, solo confirmar los correos de los
  coordinadores que van a aparecer en la página.

---

## 3. Formularios ("Únete a esta línea" / "Únete a nosotros")

Los campos ya están definidos en el código (nombre, correo, teléfono,
motivación), así que aquí no hay contenido que crear — solo asegúrense de
que el texto que acompaña al formulario invite claramente a inscribirse
(ej. "¿Quieres ser parte de la línea de Animación? Cuéntanos por qué").

---

## 4. Organización del material antes de subirlo

Mientras se va grabando/escribiendo, organicen todo en una carpeta
compartida (Google Drive, por ejemplo) con esta estructura, para que quien
suba el contenido al código no tenga que andar buscando archivos sueltos:

```
Contenido Reformat/
├── inicio/
├── conocenos/
│   ├── videoreel/
│   ├── perfiles/
│   └── foto-equipo/
├── lineas/
│   ├── audiovisual/
│   ├── animacion/
│   ├── mapping/
│   ├── videomapping/
│   └── web-app/
└── noticias/
```

---

## 5. Publicar Noticias sin tocar código (a futuro)

Mencionaste que sería bueno que alguien sin conocimientos técnicos pueda
publicar noticias directamente. Cuando el equipo esté listo para eso, la
recomendación es **Decap CMS** (gratuito, se conecta con Netlify y GitHub):
le da a quien escriba las noticias un panel simple tipo formulario (título,
fecha, imagen, texto), y publica automáticamente sin que nadie tenga que
tocar HTML. No es urgente implementarlo ahora, pero ya está anotado como
pendiente en el README principal (sección "Próximos pasos").

---

## 6. Checklist antes de subir contenido nuevo

- [ ] Nombre de archivo en minúsculas, sin espacios ni tildes.
- [ ] Imagen comprimida (menos de 500 KB).
- [ ] Video en mp4, 1080p o menos.
- [ ] Alt text escrito para cada imagen.
- [ ] Texto revisado (ortografía) y dentro de la longitud sugerida.
