/**
 * Servidor principal del backend de Reformat.
 * RESPONSABLE: Victor Pedroza (coordinación), Esteban Camilo Mera y Javier Sandoval
 *
 * Cómo correrlo:
 *   1. cd backend
 *   2. npm install
 *   3. npm run dev   (o "npm start" si no tienes nodemon)
 */
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const contactoRoutes = require("./routes/contacto");
const uneteRoutes = require("./routes/unete");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de la API
app.use("/api/contacto", contactoRoutes);
app.use("/api/unete", uneteRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend de Reformat funcionando correctamente 🚀");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;
