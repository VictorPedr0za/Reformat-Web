import { Link } from "react-router-dom";

export default function LineaCard({ linea, index = 0 }) {
  return (
    <Link
      to={`/lineas/${linea.slug}`}
      className="card-lift stagger-item group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className={`h-28 w-full bg-gradient-to-br ${linea.gradient}`} />
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-lg font-semibold text-neutral-900">{linea.nombre}</h3>
        <p className="flex-1 text-sm text-neutral-500">{linea.resumen}</p>
        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
          Ver línea
          <svg
            className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
