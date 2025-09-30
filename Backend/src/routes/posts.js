const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// GET todos los posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('autor', 'nombre email').sort({ fechaCreacion: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST crear nuevo post
router.post('/', async (req, res) => {
  const post = new Post({
    titulo: req.body.titulo,
    contenido: req.body.contenido,
    imagen: req.body.imagen,
    autor: req.body.autor,
    departamento: req.body.departamento
  });

  try {
    const nuevoPost = await post.save();
    await nuevoPost.populate('autor', 'nombre email');
    res.status(201).json(nuevoPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT like a post
router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const usuarioId = req.body.usuarioId;
    
    if (post.likes.includes(usuarioId)) {
      // Quitar like
      post.likes = post.likes.filter(id => id.toString() !== usuarioId);
    } else {
      // Agregar like
      post.likes.push(usuarioId);
    }
    
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST comentario
router.post('/:id/comentarios', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.comentarios.push({
      usuario: req.body.usuarioId,
      texto: req.body.texto
    });
    
    await post.save();
    await post.populate('comentarios.usuario', 'nombre');
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;