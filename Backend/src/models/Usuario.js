const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // AGREGAR ESTA LÍNEA

const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

// Encriptar password antes de guardar
usuarioSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Método para comparar passwords
usuarioSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// SOLO UN module.exports - ELIMINAR EL DUPLICADO
module.exports = mongoose.model('Usuario', usuarioSchema);