export default function PageHero({ eyebrow, title, subtitle, gradient = "from-neutral-950 to-neutral-900" }) {
  return (
    <section className={`bg-gradient-to-br ${gradient} text-white`}>
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        {eyebrow && (
          <span className="stagger-item inline-block rounded-full border border-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
            {eyebrow}
          </span>
        )}
        <h1 className="stagger-item mt-5 text-4xl font-extrabold sm:text-5xl" style={{ animationDelay: "60ms" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="stagger-item mx-auto mt-4 max-w-xl text-white/70" style={{ animationDelay: "120ms" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
