import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">404</p>
      <h1 className="mt-3 text-3xl font-extrabold text-neutral-900">Página no encontrada</h1>
      <p className="mt-3 max-w-sm text-neutral-500">La página que buscas no existe o fue movida.</p>
      <Link to="/" className="btn-press mt-8 rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-white">
        Volver al inicio
      </Link>
    </div>
  );
}
