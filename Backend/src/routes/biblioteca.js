const express = require('express');
const router = express.Router();

// GET todos los recursos de biblioteca
router.get('/', async (req, res) => {
  try {
    // Por ahora devolver array vacío hasta que tengamos MongoDB
    res.json([]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;