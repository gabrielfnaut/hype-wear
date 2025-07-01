// backend/routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rotas públicas
router.post('/cadastrar', usuarioController.cadastrarUsuario);
router.post('/login', usuarioController.loginUsuario);

// Rota protegida (exemplo futuro)
// router.get('/perfil', authMiddleware, usuarioController.getPerfil);

module.exports = router;
