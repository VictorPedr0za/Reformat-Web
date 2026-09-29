const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const { leerJSON } = require("../config/db");

router.post("/login", (req, res) => {
  const usuario = typeof req.body?.usuario === "string" ? req.body.usuario.trim().toLowerCase() : "";
  const password = typeof req.body?.password === "string" ? req.body.password : "";

  if (!usuario || !password) {
    return res.status(400).json({ error: "Ingresa usuario y contraseña" });
  }

  const cuenta = leerJSON("usuarios.json").find((item) => item.usuario === usuario);
  if (!cuenta) {
    return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }

  const hashIngresado = crypto.scryptSync(password, Buffer.from(cuenta.salt, "hex"), 64);
  const hashGuardado = Buffer.from(cuenta.passwordHash, "hex");
  const credencialesValidas =
    hashIngresado.length === hashGuardado.length && crypto.timingSafeEqual(hashIngresado, hashGuardado);

  if (!credencialesValidas) {
    return res.status(401).json({ error: "Usuario o contraseña incorrectos" });
  }

  return res.json({ mensaje: "Inicio de sesión correcto", usuario: cuenta.usuario });
});

module.exports = router;