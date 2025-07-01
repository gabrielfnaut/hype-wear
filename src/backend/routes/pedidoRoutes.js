const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController');

// CRUD básico de pedidos
router.get('/pedidos', controller.listar);
router.get('/pedidos/:id', controller.buscarPorId);
router.post('/pedidos', controller.criar);
router.put('/pedidos/:id', controller.atualizar);
router.delete('/pedidos/:id', controller.deletar);

module.exports = router;
