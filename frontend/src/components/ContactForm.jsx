import { useState } from "react";
import { submitForm } from "../lib/api.js";

const inputClass =
  "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors duration-160 focus:border-[var(--color-primary)]";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    setSubmitting(true);
    setStatus({ state: "idle", message: "" });

    try {
      await submitForm("/api/contacto", data);
      setStatus({ state: "ok", message: "¡Gracias! Tu mensaje fue enviado." });
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
      <input className={inputClass} type="text" name="nombre" placeholder="Nombre" required />
      <input className={inputClass} type="email" name="correo" placeholder="Correo" required />
      <textarea
        className={`${inputClass} min-h-32 resize-none`}
        name="consulta"
        placeholder="Tu consulta"
        required
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
