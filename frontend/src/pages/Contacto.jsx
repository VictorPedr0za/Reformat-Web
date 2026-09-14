import PageHero from "../components/PageHero.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Reveal from "../components/Reveal.jsx";
import { SOCIALS, CONTACT_EMAIL } from "../data/socials.js";

export default function Contacto() {
  return (
    <div>
      <PageHero eyebrow="Hablemos" title="Contacto" subtitle="Escríbenos y te responderemos lo antes posible." />

      <section className="relative mx-auto max-w-4xl px-6 py-16">
        <Reveal className="flex flex-col items-center text-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="surface card-lift flex items-center gap-4 rounded-2xl p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                <path
                  d="M3 5.5h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="m3 6 7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="text-left">
              <p className="font-semibold text-white">Escríbenos a nuestro correo</p>
              <p className="text-sm text-neutral-400">{CONTACT_EMAIL}</p>
            </div>
          </a>

          <p className="mt-10 text-sm font-semibold uppercase tracking-wide text-neutral-400">
            Síguenos en nuestras redes
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="btn-press flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white">Formulario</h2>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
