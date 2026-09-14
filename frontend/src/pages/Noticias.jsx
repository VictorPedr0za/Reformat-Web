import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";

const NOTICIAS = [
  {
    titulo: "Reformat abre convocatoria para nuevos integrantes",
    fecha: "01 de septiembre, 2026",
    resumen: "Buscamos estudiantes interesados en audiovisual, animación, mapping y desarrollo web/app.",
  },
  {
    titulo: "Primeros avances de la línea de Mapping",
    fecha: "18 de agosto, 2026",
    resumen: "El equipo de Mapping presenta sus primeras pruebas de proyección para el semestre.",
  },
];

export default function Noticias() {
  return (
    <div>
      <PageHero eyebrow="Blog" title="Noticias" subtitle="Lo último del semillero, proyecto por proyecto." />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex flex-col divide-y divide-black/5">
          {NOTICIAS.map((noticia, i) => (
            <Reveal key={noticia.titulo} delay={i * 80} className="py-8 first:pt-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                {noticia.fecha}
              </p>
              <h3 className="mt-2 text-xl font-bold text-neutral-900">{noticia.titulo}</h3>
              <p className="mt-2 text-neutral-500">{noticia.resumen}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
