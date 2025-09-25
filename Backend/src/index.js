 const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de prueba
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando");
});

// Puerto desde .env o 5000 por defecto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Servidor corriendo en http://localhost:${PORT}');
});
