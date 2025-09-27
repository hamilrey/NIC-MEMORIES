const express = require('express');
const Usuario = require('../models/Usuario');
const router = express.Router();

// REGISTRO de usuario
router.post('/registro', async (req, res) => {
  try {
    const usuario = new Usuario({
      nombre: req.body.nombre,
      email: req.body.email,
      password: req.body.password // Encriptar después
    });
    
    const nuevoUsuario = await usuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// LOGIN de usuario
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email, password });
    
    if (usuario) {
      res.json({ mensaje: 'Login exitoso', usuario });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;