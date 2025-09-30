const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descripcion: String,
  fechaInicio: {
    type: Date,
    required: true
  },
  fechaFin: Date,
  departamento: String,
  ubicacion: String,
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  participantes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  }]
});

module.exports = mongoose.model('Evento', eventoSchema);