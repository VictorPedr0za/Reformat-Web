# 🌐 Proyecto Web Reformat — Guía Maestra del Equipo

Esta guía explica **absolutamente todo** lo que necesitas saber para trabajar
en el proyecto: qué es, cómo está organizado, quién hace qué, cómo se usa Git,
dónde se va a alojar y qué contenido necesitamos. Está pensada para que
cualquier persona del equipo, sin importar su experiencia previa, pueda
seguirla sin perderse.

> 📌 Si tienes dudas después de leer esto, pregunta en el grupo **antes** de
> hacer algo que no tengas claro (sobre todo con Git). Es más fácil resolver
> una duda a tiempo que deshacer un error después.

---

## 0. Contexto del proyecto

Reformat necesita su página web oficial, construida en **HTML, CSS y
JavaScript** (con un pequeño backend en Node.js para los formularios). Según
el mapa interno del proyecto, el sitio se compone de:

- **Inicio** — introducción + imagen del semillero.
- **Líneas** — botón principal del header que lleva a un listado de las 5
  líneas del semillero. Cada línea tiene: sus propios proyectos, sus
  integrantes, y un formulario **"Únete a esta línea"**.
  - Audiovisual
  - Animación
  - Mapping
  - Videomapping
  - Web/App
- **Conócenos** — videos institucionales, presentación, foto de equipo,
  perfiles del semillero, y formulario **"Únete a nosotros"**.
- **Noticias** — un blog tipo columna de noticias.
- **Contacto** — correos de los coordinadores + formulario de contacto.
- **Escuela** — es un **proyecto aparte** (con su propio login y módulos),
  que el equipo también desarrollará, pero **no es parte de este entregable**.
  Por ahora solo debemos dejar previsto que en algún momento tendrá una
  pantalla de login que se conecta desde el sitio principal.

**Meta de tiempo:** el sitio completo debe estar listo para **octubre**.
Este primer entregable (código + esta guía) es la base para llegar a un
**~50% de avance ahora mismo**, completando la estructura y el contenido de
cada módulo (aunque sea con contenido de relleno mientras graban el material
real).

---

## 1. Instalación de herramientas (una sola vez, por persona)

Cada integrante debe instalar esto **antes** de empezar a trabajar:

1. **Git** → [https://git-scm.com/downloads](https://git-scm.com/downloads)
   ```bash
   git --version
   ```
2. **Node.js** (versión LTS) → [https://nodejs.org](https://nodejs.org)
   ```bash
   node -v
   npm -v
   ```
3. **Visual Studio Code** → [https://code.visualstudio.com](https://code.visualstudio.com)
4. Extensión de VS Code **"Live Server"** (de Ritwick Dey).
5. Cuenta de **GitHub** — envíale tu usuario a Victor (quien crea y administra
   el repositorio) para que te agregue como colaborador.
6. *(Opcional, recomendado para quien le cueste la terminal)*: **GitHub
   Desktop** → [https://desktop.github.com](https://desktop.github.com) — hace
   lo mismo que los comandos de Git pero con botones. Todos los pasos de esta
   guía tienen su equivalente ahí (clonar, cambiar de rama, commit, push).

---

## 2. Estructura de carpetas del proyecto

```
reformat-web/
├── README.md                → esta guía
├── .gitignore
├── docs/
│   └── CONTENIDO.md         → pautas para crear el contenido (textos, fotos, videos)
├── frontend/
│   ├── index.html           → página de Inicio
│   ├── assets/
│   │   ├── css/style.css    → estilos generales (cada quien edita SU sección)
│   │   ├── js/main.js       → header/footer dinámico + envío de formularios
│   │   └── img/             → imágenes (y video/ si agregan una carpeta)
│   ├── components/
│   │   ├── header.html      → menú de navegación (se repite en todas las páginas)
│   │   └── footer.html
│   └── pages/
│       ├── conocenos.html
│       ├── noticias.html
│       ├── contacto.html
│       └── lineas/
│           ├── index.html       → listado de las 5 líneas
│           ├── audiovisual.html
│           ├── animacion.html
│           ├── mapping.html
│           ├── videomapping.html
│           └── webapp.html
└── backend/
    ├── server.js             → arranca el servidor
    ├── package.json
    ├── .env.example
    ├── routes/
    │   ├── contacto.js        → endpoint POST /api/contacto
    │   └── unete.js           → endpoint POST /api/unete
    ├── config/db.js           → guarda/lee datos en /data (JSON simple, sin BD real todavía)
    └── data/                  → aquí quedan guardadas las respuestas de los formularios
```

> 💡 **Regla de oro:** cada persona trabaja sobre todo dentro de **su**
> archivo o carpeta asignada (ver tabla de roles). Si necesitas tocar algo
> compartido (`style.css`, `main.js`, `header.html`), avísalo antes en el
> grupo para no generar conflictos.

---

## 3. Equipo y roles

Con base en lo que me compartiste, así queda repartido el trabajo. Si se
suma alguien nuevo al equipo, puede tomar cualquiera de las tareas marcadas
como "apoyo" o dividirse una de las más cargadas.

| Integrante | Perfil | Módulo(s) asignado(s) | Archivos a cargo | Rama sugerida |
|---|---|---|---|---|
| **Isabella** | Frontend | Header/Footer/Inicio + Conócenos | `frontend/index.html`, `frontend/components/`, `frontend/pages/conocenos.html` | `feature/isabella-header-inicio-conocenos` |
| **Juan David Gaviria** | Frontend | Líneas — Audiovisual y Animación (+ índice de Líneas) | `frontend/pages/lineas/index.html`, `audiovisual.html`, `animacion.html` | `feature/juandavid-lineas-audiovisual-animacion` |
| **Juan Sarmiento** | Frontend (y algo de backend) | Líneas — Mapping, Videomapping y Web/App | `frontend/pages/lineas/mapping.html`, `videomapping.html`, `webapp.html` | `feature/juansarmiento-lineas-mapping-videomapping-webapp` |
| **Victor Pedroza** | Frontend + Backend (líder técnico / coordina el repo) | Noticias + Contacto (frontend), coordinación general del backend, soporte de Git a todo el equipo | `frontend/pages/noticias.html`, `contacto.html`, `backend/server.js` | `feature/victor-noticias-contacto` y `feature/victor-backend-coordinacion` |
| **Esteban Camilo Mera** | Frontend | Login Asodisvalle y paginas | `frontend/escuela/Asodisvalle.js` | `feature/esteban-escuela-login` |
| **Javier Sandoval** | Frontend | Pag Principal Asodisvalle y Estructura de los test | `frontend/escuela/asodisvalle` | `feature/javier-escuela-tests` |
| **Salomé Galindez** | Diseño | Probar la pagina y testear cada seccion tanto en pc como en celular y anotar cada cosa| Variables `:root` de `style.css` (las edita ella misma o le dicta los valores a quien esté trabajando en esa página), `docs/CONTENIDO.md` | No necesita rama de código — revisa directamente en GitHub o en Live Server |
| *(Nuevos integrantes)* | — | Toman una tarea de apoyo: reemplazar contenido placeholder, ayudar con pruebas, o dividir una de las líneas más cargadas | — | `feature/nombre-modulo` |


---

## 4. Cómo clonar el proyecto (primera vez)

```bash
# 1. Clona el repositorio (Victor comparte la URL real una vez creado en GitHub)
git clone https://github.com/tu-organizacion/reformat-web.git

# 2. Entra a la carpeta
cd reformat-web

# 3. Cambia a la rama develop (ahí se integra el trabajo de todos)
git checkout develop
```

---

## 5. Cómo correr el proyecto localmente

### Frontend
No necesita instalación:
1. Abre la carpeta `reformat-web` en VS Code.
2. Clic derecho sobre `frontend/index.html` → **"Open with Live Server"**.
3. Se abre en el navegador, algo como `http://127.0.0.1:5500`.

> ⚠️ No abras el HTML con doble clic (`file://...`): el header/footer
> dinámico y los formularios no van a funcionar sin un servidor local.

### Backend
```bash
cd backend
npm install          # instala las dependencias (primera vez o si cambian)
cp .env.example .env # crea tu configuración local
npm run dev           # levanta el servidor con recarga automática
```
Debe aparecer: `Servidor backend corriendo en http://localhost:3000`

Con el backend corriendo, los formularios (Contacto, Únete a esta línea) ya
guardan la información de verdad (por ahora en archivos JSON dentro de
`backend/data/`, nada de bases de datos complejas — eso lo dejamos para más
adelante si el proyecto lo pide).

---

## 6. Hosting recomendado (dónde alojar la página)

Como me confirmaste que **por ahora no es prioridad tener algo súper
estructurado**, sino algo funcional y presentable para pruebas, esta es mi
recomendación pensando en que el equipo es nuevo en esto:

| Parte | Dónde alojarlo | Por qué |
|---|---|---|
| **Frontend** (HTML/CSS/JS) | **Netlify** | Gratis, se conecta directo a GitHub (cada `push` a `main` despliega solo), da HTTPS automático, y permite un dominio propio después. También soporta un modo "Netlify Forms" por si en algún punto quieren formularios sin backend. |
| **Backend** (Express) | **Render** (plan gratuito "Web Service") | Se conecta a GitHub igual que Netlify, soporta Node.js sin configuración rara, y tiene un plan gratuito perfecto para "algo funcional para testear" como lo describiste. |
| Alternativas válidas | GitHub Pages (solo frontend, 100% gratis) / Vercel (frontend y funciones backend) / Railway (backend) | Cualquiera de estas también sirve; Netlify + Render es simplemente la combinación más simple para empezar sin pelear con configuraciones. |

**Para el futuro (Noticias sin tocar código):** ya que dijiste que sería
bueno publicar noticias sin necesidad de código, cuando lleguen a esa etapa
les recomiendo mirar **Decap CMS** (antes "Netlify CMS"): es gratuito, se
integra con Netlify y con tu repositorio de GitHub, y le da a cualquier
persona sin conocimientos técnicos un panel simple para escribir y publicar
noticias. No es necesario implementarlo ahora — lo dejo anotado en
`docs/CONTENIDO.md` para cuando el proyecto lo requiera.

No es necesario decidir el dominio todavía: mientras tanto, tanto Netlify
como Render dan una URL gratuita de prueba (algo como
`reformat-web.netlify.app`) que sirve perfecto para las pruebas del equipo.

---

## 7. Estrategia de ramas (Git branches)

### 7.1 Ramas fijas

- **`main`** → versión estable, lista para mostrar/producción. Nadie hace push directo aquí.
- **`develop`** → rama de integración. Aquí se juntan los avances de todos antes de pasar a `main`.

### 7.2 Ramas de trabajo (ver tabla de la sección 3)

Nomenclatura: `feature/nombre-modulo`

```
feature/isabella-header-inicio-conocenos
feature/juandavid-lineas-audiovisual-animacion
feature/juansarmiento-lineas-mapping-videomapping-webapp
feature/victor-noticias-contacto
feature/victor-backend-coordinacion
feature/esteban-backend-contacto
feature/javier-backend-unete-deploy
```

### 7.3 Diagrama del flujo

```
main
  ↑ (merge solo cuando develop está probado y estable)
develop
  ↑         ↑           ↑              ↑        ↑          ↑
Isabella  JuanDavid  JuanSarmiento   Victor   Esteban    Javier
```

Cada persona sale de `develop`, trabaja en su rama, y cuando termina su
avance abre un **Pull Request (PR)** de vuelta hacia `develop`. Salomé revisa
visualmente antes de aprobar.

---

## 8. Comandos esenciales de Git (chuleta para principiantes)

Ya que Victor tiene algo de experiencia pero el resto del equipo está
empezando, aquí va una referencia rápida de los comandos que van a usar
**todo el tiempo**:

| Comando | Para qué sirve |
|---|---|
| `git status` | Te dice qué archivos cambiaste y en qué rama estás. **Úsalo todo el tiempo**, no tiene efectos secundarios. |
| `git checkout develop` | Te mueve a la rama `develop`. |
| `git pull origin develop` | Trae a tu computador los últimos cambios que subieron tus compañeros. |
| `git checkout -b feature/mi-rama` | Crea una rama nueva a partir de donde estás parado, y te mueve a ella. |
| `git checkout feature/mi-rama` | Te mueve a una rama que ya existe (sin el `-b`). |
| `git add .` | Marca todos tus cambios para el próximo commit. |
| `git commit -m "feat: descripción corta"` | Guarda tus cambios marcados, con un mensaje explicando qué hiciste. |
| `git push origin feature/mi-rama` | Sube tu rama y tus commits a GitHub. |
| `git log --oneline` | Muestra el historial de commits, resumido. |
| `git diff` | Te muestra línea por línea qué cambiaste antes de hacer commit. |
| `git branch` | Lista todas las ramas que tienes localmente (la actual sale marcada con `*`). |
| `git stash` | "Guarda en un cajón" cambios que no quieres perder pero tampoco quieres commitear todavía (por ejemplo, si necesitas cambiar de rama urgente). Se recuperan con `git stash pop`. |

**Convención de mensajes de commit:**

| Prefijo | Cuándo usarlo |
|---|---|
| `feat:` | Agregaste algo nuevo (una sección, un formulario) |
| `fix:` | Corregiste un error |
| `style:` | Cambios de estilos/CSS sin tocar funcionalidad |
| `docs:` | Cambios en documentación (README, comentarios) |
| `refactor:` | Reordenaste código sin cambiar el resultado |

---

## 9. Flujo de trabajo diario (paso a paso)

### Paso 1 — Antes de empezar a trabajar cada día
```bash
git checkout develop
git pull origin develop
```

### Paso 2 — Crea o retoma tu rama
La primera vez:
```bash
git checkout -b feature/isabella-header-inicio-conocenos
```
Los siguientes días (ya existe la rama):
```bash
git checkout feature/isabella-header-inicio-conocenos
git merge develop   # trae lo nuevo de develop a tu rama
```

### Paso 3 — Trabaja normalmente
Edita únicamente los archivos que te corresponden (tabla de la sección 3).

### Paso 4 — Guarda tus cambios
```bash
git add .
git commit -m "feat: agrega sección de perfiles en Conócenos"
```

### Paso 5 — Sube tu rama a GitHub
```bash
git push origin feature/isabella-header-inicio-conocenos
```

### Paso 6 — Abre un Pull Request
1. Entra a GitHub → botón "Compare & pull request".
2. Base: `develop` ← Compare: tu rama.
3. Describe brevemente qué hiciste.
4. Asigna a un compañero (o a Salomé para revisión visual) como revisor.

### Paso 7 — Revisión y merge
Si todo está bien, se aprueba y se hace **merge** a `develop`. Si hay algo
que corregir, se comenta en el PR y vuelves al Paso 3 sobre la misma rama.

---

## 10. Cómo evitar y resolver conflictos en Git

- Trabaja **solo** en los archivos de tu módulo. Si necesitas tocar algo
  compartido (`style.css`, `main.js`, `header.html`), avisa antes en el grupo.
- Haz `git pull origin develop` seguido (mínimo una vez al día).
- Commits pequeños y frecuentes son mejores que uno gigante al final.
- Si aparece un conflicto (Git lo marca con `<<<<<<<` dentro del archivo):
  1. Abre el archivo y busca esas marcas.
  2. Decide qué parte de cada cambio se queda (a veces son las dos).
  3. Borra las líneas `<<<<<<<`, `=======`, `>>>>>>>`.
  4. Guarda el archivo y:
     ```bash
     git add .
     git commit -m "fix: resuelve conflicto en style.css"
     ```

### Errores comunes (y cómo resolverlos)

| Mensaje / situación | Qué significa | Qué hacer |
|---|---|---|
| `Your branch is ahead of 'origin/...' by N commits` | Tienes commits locales que aún no subiste | `git push origin tu-rama` |
| `Please commit your changes or stash them before you switch branches` | Intentaste cambiar de rama con cambios sin guardar | `git add . && git commit -m "..."` o `git stash` |
| `Merge conflict in archivo.html` | Dos personas editaron las mismas líneas | Sigue los pasos de arriba para resolver conflictos |
| `fatal: not a git repository` | No estás dentro de la carpeta del proyecto | `cd reformat-web` y vuelve a intentar |

---

## 11. Pautas de contenido

El contenido real (videos, textos, fotos) todavía se está grabando, así que
por ahora cada página tiene contenido de relleno marcado con
`<!-- TODO -->`. Para que el contenido definitivo quede bien desde el primer
intento (tamaños de imagen, duración de videos, tono de los textos, nombres
de archivos, etc.), toda esa guía está en:

📄 **[`docs/CONTENIDO.md`](./docs/CONTENIDO.md)**

Salomé (Diseño) y quien esté grabando/escribiendo deberían leerla antes de
entregar material para subir al sitio.

---

## 12. Cronograma sugerido (hoy → octubre)

Partiendo de que hoy (13 de septiembre) reciben esta base de código:

| Semana | Objetivo |
|---|---|
| **13–19 sept** | Crear el repositorio en GitHub, cada persona clona el proyecto, corre el frontend y el backend en su computador, y crea su rama. |
| **20 sept–3 oct** | Cada quien desarrolla su módulo con la estructura ya lista (aunque el contenido siga siendo de relleno). Backend con los dos endpoints funcionando. Salomé define la paleta y tipografía definitivas. **Meta: ~50% del sitio armado.** |
| **4–10 oct** | Primeras integraciones a `develop`, reemplazo de contenido real a medida que esté listo (videos/fotos ya grabados), primeras pruebas cruzadas entre módulos. |
| **11–17 oct** | Ajustes de responsive (celular/tablet), accesibilidad básica, primer despliegue de prueba en Netlify/Render. |
| **18–31 oct** | Pulido final, revisión de diseño de Salomé página por página, corrección de errores, despliegue a producción. **Entrega final.** |

---

## 13. Checklist antes de cada reunión de integración

- [ ] Todas las ramas individuales están subidas a GitHub.
- [ ] Todos los Pull Requests fueron revisados por otra persona (o por Salomé si es visual).
- [ ] `develop` corre sin errores (frontend abre bien, backend levanta).
- [ ] Formularios probados manualmente (llenar y enviar de verdad).
- [ ] Vista responsive revisada en móvil (herramientas de desarrollador → modo dispositivo).

---

## 14. Próximos pasos / pendientes

1. Crear el repositorio real en GitHub y agregar a todo el equipo como colaboradores.
2. Definir la paleta de colores y tipografía final (Salomé) y actualizar las variables en `style.css`.
3. Reemplazar los `<!-- TODO -->` por contenido real a medida que se vaya grabando (ver `docs/CONTENIDO.md`).
4. Crear las cuentas de Netlify y Render, y conectar el repositorio para el primer despliegue de prueba.
5. Cuando el equipo lo decida, evaluar Decap CMS para que Noticias se publique sin tocar código.
6. Conectar (más adelante) el módulo "Escuela" como proyecto aparte, con su propio login.

---

**Cualquier duda de Git o del proyecto, pregunten en el grupo antes de forzar
un `push` o de borrar una rama.** 🚀
