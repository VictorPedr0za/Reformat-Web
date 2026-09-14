import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { lineas } from "../data/lineas.js";

const NAV_LINKS = [
  { to: "/conocenos", label: "Conócenos" },
  { to: "/noticias", label: "Noticias" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click / Escape.
  useEffect(() => {
    if (!dropdownOpen) return;
    function onClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdownOpen]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) => clsx("nav-link text-sm font-medium", isActive && "active");

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b bg-black/70 backdrop-blur-md transition-shadow duration-200",
        scrolled ? "border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]" : "border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-lg font-extrabold tracking-tight text-white">
          REFORMAT
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((v) => !v)}
              className={clsx(
                "nav-link flex items-center gap-1 text-sm font-medium",
                (dropdownOpen || location.pathname.startsWith("/lineas")) && "active"
              )}
              aria-haspopup="menu"
              aria-expanded={dropdownOpen}
            >
              Líneas
              <svg
                className={clsx("h-3.5 w-3.5 transition-transform duration-200 ease-out", dropdownOpen && "rotate-180")}
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              role="menu"
              data-state={dropdownOpen ? "open" : "closed"}
              className="dropdown-panel absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-neutral-900 p-2 shadow-xl shadow-black/40"
            >
              {lineas.map((linea) => (
                <NavLink
                  key={linea.slug}
                  to={`/lineas/${linea.slug}`}
                  role="menuitem"
                  className="block rounded-lg px-3 py-2 text-sm text-neutral-300 transition-colors duration-160 hover:bg-white/5 hover:text-[var(--color-primary)]"
                >
                  {linea.nombre}
                </NavLink>
              ))}
              <div className="my-1 h-px bg-white/10" />
              <NavLink
                to="/lineas"
                role="menuitem"
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--color-primary)]"
              >
                Ver todas las líneas
              </NavLink>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="btn-press flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
          aria-label="Abrir menú"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        data-state={mobileOpen ? "open" : "closed"}
        className="mobile-backdrop fixed inset-0 z-40 bg-black/40 md:hidden"
        style={{ pointerEvents: mobileOpen ? "auto" : "none" }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        data-state={mobileOpen ? "open" : "closed"}
        className="mobile-drawer fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-1 bg-neutral-950 p-6 text-white shadow-2xl shadow-black/60 md:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-base font-extrabold">REFORMAT</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="btn-press flex h-9 w-9 items-center justify-center rounded-lg border border-white/10"
            aria-label="Cerrar menú"
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500">Líneas</p>
        {lineas.map((linea) => (
          <NavLink
            key={linea.slug}
            to={`/lineas/${linea.slug}`}
            className="rounded-lg px-3 py-2 text-sm text-neutral-300 hover:bg-white/5"
          >
            {linea.nombre}
          </NavLink>
        ))}

        <div className="my-3 h-px bg-white/10" />

        {NAV_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-white/5">
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
