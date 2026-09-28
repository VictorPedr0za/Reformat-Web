import { Navigate, useParams } from "react-router-dom";
import { getLinea } from "../../data/lineas.js";
import PageHero from "../../components/PageHero.jsx";
import PerfilCard from "../../components/PerfilCard.jsx";
import JoinForm from "../../components/JoinForm.jsx";
import Reveal from "../../components/Reveal.jsx";

export default function LineaDetail() {
  const { slug } = useParams();
  const linea = getLinea(slug);

  if (!linea) return <Navigate to="/lineas" replace />;

  return (
    <div>
      <PageHero eyebrow="Línea" title={linea.nombre} subtitle={linea.descripcion} gradient={linea.gradient} />

      <section className="relative mx-auto max-w-5xl px-6 py-12">
        <Reveal>
          {linea.videoUrl ? (
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
              <iframe
                src={linea.videoUrl}
                title={`Video de presentación - ${linea.nombre}`}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="surface flex aspect-video w-full items-center justify-center rounded-2xl border border-white/10 shadow-2xl text-white">
              <div className="flex flex-col items-center gap-3">
                <span className="btn-press flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="ml-0.5 h-6 w-6">
                    <path d="M6 4.5v11l9-5.5-9-5.5Z" />
                  </svg>
                </span>
                <p className="text-sm text-white/60">Video próximamente</p>
              </div>
            </div>
          )}
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-white">Proyectos</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="stagger-item card-lift rounded-2xl border border-dashed border-white/15 p-6 text-center text-neutral-500">
            <p className="font-semibold text-neutral-400">Próximamente</p>
            <p className="mt-1 text-sm">Los proyectos de esta línea se publicarán aquí.</p>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-white">Integrantes</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            <PerfilCard nombre={linea.responsable} rol="Responsable de línea" index={0} />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 py-16 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-white">Únete a esta línea</h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-400">
            Cuéntanos por qué quieres ser parte de {linea.nombre.toLowerCase()} y te contactaremos pronto.
          </p>
        </Reveal>
        <div className="mt-8">
          <JoinForm linea={linea.nombre} promptSuffix="a esta línea" />
        </div>
      </section>
    </div>
  );
}
