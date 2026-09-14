const GRADIENTS = [
  "from-red-500 to-orange-400",
  "from-fuchsia-500 to-rose-500",
  "from-orange-500 to-amber-400",
  "from-rose-600 to-red-500",
  "from-red-600 to-pink-500",
];

function initials(nombre) {
  return nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function gradientFor(nombre) {
  const sum = [...nombre].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return GRADIENTS[sum % GRADIENTS.length];
}

export default function PerfilCard({ nombre, rol, index = 0 }) {
  return (
    <div
      className="stagger-item flex flex-col items-center gap-3 text-center"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div
        className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white shadow-md ${gradientFor(
          nombre
        )}`}
      >
        {initials(nombre)}
      </div>
      <div>
        <p className="font-semibold text-neutral-900">{nombre}</p>
        {rol && <p className="text-sm text-neutral-500">{rol}</p>}
      </div>
    </div>
  );
}
