import { lineas } from "../../data/lineas.js";
import LineaCard from "../../components/LineaCard.jsx";
import PageHero from "../../components/PageHero.jsx";

export default function LineasIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Explora"
        title="Nuestras líneas"
        subtitle="Cada línea tiene sus propios proyectos, integrantes y un formulario para unirte."
      />
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lineas.map((linea, i) => (
            <LineaCard key={linea.slug} linea={linea} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
