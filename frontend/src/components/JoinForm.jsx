import { useState } from "react";
import { submitForm } from "../lib/api.js";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors duration-160 focus:border-[var(--color-primary)]";

export default function JoinForm({ linea = "General", promptSuffix = "a nosotros" }) {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    setSubmitting(true);
    setStatus({ state: "idle", message: "" });

    try {
      await submitForm("/api/unete", data);
      setStatus({ state: "ok", message: "¡Gracias! Tu información fue enviada." });
      form.reset();
    } catch (err) {
      setStatus({
        state: "error",
        message: "No pudimos conectar con el servidor. Intenta de nuevo más tarde.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-lg flex-col gap-4">
      <input type="hidden" name="linea" value={linea} />
      <input className={inputClass} type="text" name="nombre" placeholder="Nombre completo" required />
      <input className={inputClass} type="email" name="correo" placeholder="Correo electrónico" required />
      <input className={inputClass} type="tel" name="telefono" placeholder="Teléfono" />
      <textarea
        className={`${inputClass} min-h-28 resize-none`}
        name="motivacion"
        placeholder={`Cuéntanos por qué quieres unirte ${promptSuffix}`}
      />
      <button
        type="submit"
        disabled={submitting}
        className="btn-press inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-white shadow-sm disabled:opacity-60"
      >
        {submitting ? "Enviando..." : "Enviar"}
      </button>
      <p
        data-visible={Boolean(status.message)}
        className={`form-msg text-sm font-medium ${
          status.state === "ok" ? "text-emerald-600" : "text-red-600"
        }`}
      >
        {status.message}
      </p>
    </form>
  );
}
