const express = require('express');
const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Generar token JWT
const generarToken = (usuarioId) => {
  return jwt.sign({ id: usuarioId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// REGISTRO de usuario (CORREGIDO)
router.post('/registro', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Crear nuevo usuario (la encriptación se hace automáticamente en el modelo)
    const usuario = new Usuario({ nombre, email, password });
    const nuevoUsuario = await usuario.save();

    // Generar token JWT
    const token = generarToken(nuevoUsuario._id);

    // Responder sin incluir el password
    res.status(201).json({ 
      mensaje: 'Usuario registrado exitosamente', 
      usuario: {
        id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
        fechaRegistro: nuevoUsuario.fechaRegistro
      },
      token 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// LOGIN de usuario (CORREGIDO)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por email
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Comparar password encriptado (usando el método del modelo)
    const esPasswordValido = await usuario.comparePassword(password);
    if (!esPasswordValido) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Generar token JWT
    const token = generarToken(usuario._id);

    res.json({ 
      mensaje: 'Login exitoso', 
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        fechaRegistro: usuario.fechaRegistro
      },
      token 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;