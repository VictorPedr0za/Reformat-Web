/**
 * Rutas relacionadas con el formulario de Contacto.
 * RESPONSABLE: Esteban Camilo Mera
 */
const express = require("express");
const router = express.Router();
const { leerJSON, guardarJSON } = require("../config/db");

// POST /api/contacto  -> guarda un nuevo mensaje de contacto
router.post("/", (req, res) => {
  const { nombre, correo, consulta } = req.body;

  if (!nombre || !correo || !consulta) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  const contactos = leerJSON("contactos.json");
  contactos.push({
    id: Date.now(),
    nombre,
    correo,
    consulta,
    fecha: new Date().toISOString(),
  });
  guardarJSON("contactos.json", contactos);

  res.status(201).json({ mensaje: "Contacto recibido correctamente" });
});

// GET /api/contacto -> lista todos los contactos (uso interno / admin)
router.get("/", (req, res) => {
  const contactos = leerJSON("contactos.json");
  res.json(contactos);
});

module.exports = router;
