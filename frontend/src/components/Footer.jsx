import { Link } from "react-router-dom";
import { lineas } from "../data/lineas.js";
import { SOCIALS } from "../data/socials.js";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5 bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-extrabold text-white">REFORMAT</p>
          <p className="mt-3 max-w-xs text-sm text-neutral-400">
            Semillero que transforma ideas en proyectos audiovisuales, de animación, mapping,
            videomapping y desarrollo web/app.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="btn-press flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Líneas</p>
          <ul className="mt-4 flex flex-col gap-2">
            {lineas.map((linea) => (
              <li key={linea.slug}>
                <Link
                  to={`/lineas/${linea.slug}`}
                  className="text-sm text-neutral-400 transition-colors duration-160 hover:text-white"
                >
                  {linea.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Semillero</p>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link to="/conocenos" className="text-sm text-neutral-400 transition-colors duration-160 hover:text-white">
                Conócenos
              </Link>
            </li>
            <li>
              <Link to="/noticias" className="text-sm text-neutral-400 transition-colors duration-160 hover:text-white">
                Noticias
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="text-sm text-neutral-400 transition-colors duration-160 hover:text-white">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Reformat. Todos los derechos reservados.
      </div>
    </footer>
  );
}
