const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

/**
 * Posts form data to the Node backend. The backend isn't part of this
 * pass, so a connection error is treated as "not running yet" and
 * surfaced as a friendly message instead of a hard failure.
 */
export async function submitForm(endpoint, data) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Error en el servidor");
  return res.json().catch(() => ({}));
}
