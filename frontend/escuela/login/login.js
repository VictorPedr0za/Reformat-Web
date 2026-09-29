const API_URL = "http://localhost:3000";
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const submitButton = loginForm.querySelector('button[type="submit"]');

loginForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	loginMessage.textContent = "";
	submitButton.disabled = true;

	try {
		const response = await fetch(`${API_URL}/api/auth/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				usuario: document.getElementById("usuario").value,
				password: document.getElementById("password").value,
			}),
		});
		const result = await response.json();

		if (!response.ok) {
			throw new Error(result.error || "No se pudo iniciar sesión");
		}

		window.location.href = "../asodivalle/asodisvalle.html";
	} catch (error) {
		loginMessage.textContent = error.message === "Failed to fetch"
			? "No se pudo conectar con el servidor. Verifica que el backend esté activo."
			: error.message;
	} finally {
		submitButton.disabled = false;
	}
});
