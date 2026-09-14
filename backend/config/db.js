/**
 * Config de "base de datos" muy simple basada en archivos JSON.
 * Ideal para el arranque del proyecto mientras el equipo decide
 * si migran a MongoDB, PostgreSQL, etc.
 *
 * RESPONSABLE: Equipo Backend (Victor, Esteban, Javier)
 */
const fs = require("fs");
const path = require("path");

function leerJSON(archivo) {
  const ruta = path.join(__dirname, "..", "data", archivo);
  const contenido = fs.readFileSync(ruta, "utf-8");
  return JSON.parse(contenido);
}

function guardarJSON(archivo, datos) {
  const ruta = path.join(__dirname, "..", "data", archivo);
  fs.writeFileSync(ruta, JSON.stringify(datos, null, 2));
}

module.exports = { leerJSON, guardarJSON };
