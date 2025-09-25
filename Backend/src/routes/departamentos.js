const express = require('express');
const Departamento = require('../models/Departamento');

const router = express.Router();

// GET todos los departamentos
router.get('/', async (req, res) => {
  try {
    const departamentos = await Departamento.find();
    res.json(departamentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST nuevo departamento
router.post('/', async (req, res) => {
  const departamento = new Departamento({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion
  });

  try {
    const nuevoDepartamento = await departamento.save();
    res.status(201).json(nuevoDepartamento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;