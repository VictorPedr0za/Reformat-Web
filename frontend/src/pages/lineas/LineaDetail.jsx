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

      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-neutral-900">Proyectos</h2>
        </Reveal>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="stagger-item card-lift rounded-2xl border border-dashed border-black/10 p-6 text-center text-neutral-400">
            <p className="font-semibold text-neutral-500">Próximamente</p>
            <p className="mt-1 text-sm">Los proyectos de esta línea se publicarán aquí.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-neutral-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-neutral-900">Integrantes</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            <PerfilCard nombre={linea.responsable} rol="Responsable de línea" index={0} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-neutral-900">Únete a esta línea</h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-500">
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
