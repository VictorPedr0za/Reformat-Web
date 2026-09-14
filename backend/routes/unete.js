/**
 * Rutas relacionadas con el formulario "Únete a esta línea" / "Únete a nosotros".
 * RESPONSABLE: Javier Sandoval
 */
const express = require("express");
const router = express.Router();
const { leerJSON, guardarJSON } = require("../config/db");

// POST /api/unete -> guarda una nueva solicitud de ingreso
router.post("/", (req, res) => {
  const { linea, nombre, correo, telefono, motivacion } = req.body;

  if (!linea || !nombre || !correo) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  const solicitudes = leerJSON("unete.json");
  solicitudes.push({
    id: Date.now(),
    linea,
    nombre,
    correo,
    telefono: telefono || null,
    motivacion: motivacion || null,
    fecha: new Date().toISOString(),
  });
  guardarJSON("unete.json", solicitudes);

  res.status(201).json({ mensaje: "Solicitud recibida correctamente" });
});

// GET /api/unete -> lista todas las solicitudes (uso interno / admin)
router.get("/", (req, res) => {
  const solicitudes = leerJSON("unete.json");
  res.json(solicitudes);
});

module.exports = router;
