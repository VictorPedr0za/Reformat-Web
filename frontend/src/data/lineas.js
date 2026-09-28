export const lineas = [
  {
    slug: "audiovisual",
    nombre: "Audiovisual",
    resumen: "Producción de piezas en video: cortos, documentales y contenido creativo.",
    descripcion:
      "Como estudiantes de la Universidad de San Buenaventura, exploramos y contamos historias a través de la cámara. Nos encargamos de todo el proceso creativo: desde el guion y rodaje, hasta la iluminación y edición, para crear piezas audiovisuales con identidad propia y alto impacto académico.",
    responsable: "Santiago Quintero",
    gradient: "from-rose-500 to-red-700",
    image: "reformat-film-set",
    videoUrl: "", // TODO: Pega aquí el enlace de YouTube/Vimeo del video de Audiovisual
  },
  {
    slug: "animacion",
    nombre: "Animación",
    resumen: "Animación 2D y 3D para narrativas, motion graphics y personajes.",
    descripcion:
      "Damos vida a ideas cuadro a cuadro: diseño de personajes, motion graphics y animación 2D/3D aplicada a proyectos narrativos y comerciales.",
    responsable: "Esteban Camilo Mera",
    gradient: "from-orange-500 to-rose-600",
    image: "reformat-character-studio",
    videoUrl: "", // TODO: Agregar enlace de video si es necesario
  },
  {
    slug: "videomapping",
    nombre: "Videomapping",
    resumen: "Intervenciones visuales y proyecciones dinámicas en espacios físicos.",
    descripcion:
      "Llevamos el arte visual a otro nivel. Investigamos y desarrollamos presentaciones de videomapping sobre fachadas y estructuras, transformando los espacios físicos en lienzos digitales interactivos a través de proyecciones que combinan luz, sonido y la creatividad bonaventuriana.",
    responsable: "Angie Nathalia Guevara",
    gradient: "from-red-600 to-orange-600",
    image: "reformat-facade-projection",
    videoUrl: "", // TODO: Pega aquí el enlace de YouTube/Vimeo del video de Videomapping
  },
  {
    slug: "webapp",
    nombre: "Web/App",
    resumen: "Desarrollo de sitios web y aplicaciones para los proyectos del semillero.",
    descripcion:
      "Construimos la infraestructura digital de Reformat: sitios web, aplicaciones y herramientas que dan soporte a todas las demás líneas.",
    responsable: "Isabella Narvaez",
    gradient: "from-red-500 to-pink-600",
    image: "reformat-code-desk",
    videoUrl: "", // TODO: Agregar enlace de video si es necesario
  },
];

export function getLinea(slug) {
  return lineas.find((l) => l.slug === slug);
}
