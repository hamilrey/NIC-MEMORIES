const express = require('express');
const Evento = require('../models/Evento');
const router = express.Router();

// GET todos los eventos
router.get('/', async (req, res) => {
  try {
    const eventos = await Evento.find().populate('creador', 'nombre').sort({ fechaInicio: 1 });
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST crear evento
router.post('/', async (req, res) => {
  const evento = new Evento({
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    fechaInicio: req.body.fechaInicio,
    fechaFin: req.body.fechaFin,
    departamento: req.body.departamento,
    ubicacion: req.body.ubicacion,
    creador: req.body.creador
  });

  try {
    const nuevoEvento = await evento.save();
    await nuevoEvento.populate('creador', 'nombre');
    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;