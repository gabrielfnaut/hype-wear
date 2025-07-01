const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

// GET /api/produtos - Lista todos os produtos
router.get('/produtos', controller.listar);

// GET /api/produtos/:id - Busca um produto específico pelo ID
router.get('/produtos/:id', controller.buscarPorId);

// POST /api/produtos - Cria um novo produto
router.post('/produtos', controller.criar);

// PUT /api/produtos/:id - Atualiza um produto existente
router.put('/produtos/:id', controller.atualizar);

// DELETE /api/produtos/:id - Deleta um produto
router.delete('/produtos/:id', controller.deletar);

module.exports = router;
