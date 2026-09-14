export const lineas = [
  {
    slug: "audiovisual",
    nombre: "Audiovisual",
    resumen: "Producción de piezas en video: cortos, documentales y contenido de marca.",
    descripcion:
      "Contamos historias a través de la cámara: guion, rodaje, iluminación y edición para producir piezas audiovisuales con identidad propia.",
    responsable: "Santiago Quintero",
    gradient: "from-rose-500 to-red-700",
  },
  {
    slug: "animacion",
    nombre: "Animación",
    resumen: "Animación 2D y 3D para narrativas, motion graphics y personajes.",
    descripcion:
      "Damos vida a ideas cuadro a cuadro: diseño de personajes, motion graphics y animación 2D/3D aplicada a proyectos narrativos y comerciales.",
    responsable: "Esteban Camilo Mera",
    gradient: "from-orange-500 to-rose-600",
  },
  {
    slug: "videomapping",
    nombre: "Videomapping",
    resumen: "Videomapping arquitectónico a gran escala sobre fachadas y espacios.",
    descripcion:
      "Llevamos el mapping a gran escala: proyecciones arquitectónicas sobre fachadas y espacios, combinando video, sonido y diseño espacial.",
    responsable: "Angie Nathalia Guevara",
    gradient: "from-red-600 to-orange-600",
  },
  {
    slug: "webapp",
    nombre: "Web/App",
    resumen: "Desarrollo de sitios web y aplicaciones para los proyectos del semillero.",
    descripcion:
      "Construimos la infraestructura digital de Reformat: sitios web, aplicaciones y herramientas que dan soporte a todas las demás líneas.",
    responsable: "Isabella Narvaez",
    gradient: "from-red-500 to-pink-600",
  },
];

export function getLinea(slug) {
  return lineas.find((l) => l.slug === slug);
}
