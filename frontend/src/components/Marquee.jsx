const DISCIPLINES = ["Audiovisual", "Animación", "Mapping", "Videomapping", "Web/App"];

export default function Marquee() {
  const items = [...DISCIPLINES, ...DISCIPLINES];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-neutral-950 py-6">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
            {items.map((label, i) => (
              <span key={`${group}-${label}-${i}`} className="flex items-center">
                <span className="px-6 text-3xl font-extrabold uppercase tracking-tight text-white/80 sm:px-10 sm:text-5xl">
                  {label}
                </span>
                <span className="text-3xl font-extrabold text-white/20 sm:text-5xl" aria-hidden="true">
                  /
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
