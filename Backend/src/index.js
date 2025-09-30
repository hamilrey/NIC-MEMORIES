const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const departamentosRoutes = require("./routes/departamentos");
const usuariosRoutes = require("./routes/usuarios");

const app = express();

const postsRoutes = require('./routes/posts');
const eventosRoutes = require('./routes/eventos');

// Después de las otras rutas
app.use("/api/posts", postsRoutes);
app.use("/api/eventos", eventosRoutes);

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nic-memories")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error conectando a MongoDB:", err));

// AGREGA ESTA LÍNEA (rutas de usuarios)
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/departamentos", departamentosRoutes);

app.get("/", (req, res) => {
  res.send("Servidor backend funcionando");
});

app.get("/api", (req, res) => {
  res.json({ message: "API de NIC Memories funcionando" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});