import PageHero from "../components/PageHero.jsx";
import PerfilCard from "../components/PerfilCard.jsx";
import JoinForm from "../components/JoinForm.jsx";
import Reveal from "../components/Reveal.jsx";

const EQUIPO = [
  { nombre: "Isabella", rol: "Web/App" },
  { nombre: "Juan David Gaviria", rol: "Audiovisual, VideoMapping y Web/App" },
  { nombre: "Juan Sarmiento", rol: "Mapping y Web/App" },
  { nombre: "Victor Pedroza", rol: "VideoMapping y Web/App" },
];

export default function Conocenos() {
  return (
    <div>
      <PageHero eyebrow="Semillero" title="Conócenos" subtitle="Quiénes somos y qué nos mueve a crear." />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <h2 className="text-2xl font-bold text-neutral-900">Videoreel</h2>
          <div className="mt-5 flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
            <div className="flex flex-col items-center gap-3">
              <span className="btn-press flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                <svg viewBox="0 0 20 20" fill="currentColor" className="ml-0.5 h-6 w-6">
                  <path d="M6 4.5v11l9-5.5-9-5.5Z" />
                </svg>
              </span>
              <p className="text-sm text-white/60">Video institucional próximamente</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <h2 className="text-2xl font-bold text-neutral-900">Presentación</h2>
          <p className="mt-3 text-neutral-500">
            Reformat es el semillero que transforma ideas en proyectos audiovisuales, de
            animación, mapping, videomapping y desarrollo web/app. Creamos un espacio para
            experimentar, aprender haciendo y construir un portafolio real trabajando en equipo.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-black/5 bg-neutral-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-neutral-900">Perfiles</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {EQUIPO.map((persona, i) => (
              <PerfilCard key={persona.nombre} nombre={persona.nombre} rol={persona.rol} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="unete" className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16 text-center">
        <Reveal>
          <h2 className="text-2xl font-bold text-neutral-900">Únete a nosotros</h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-500">
            Cuéntanos un poco sobre ti y por qué te gustaría ser parte de Reformat.
          </p>
        </Reveal>
        <div className="mt-8">
          <JoinForm linea="General" />
        </div>
      </section>
    </div>
  );
}
