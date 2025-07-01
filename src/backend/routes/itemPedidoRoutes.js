const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemPedidoController');

// Rotas CRUD para os itens do pedido
router.get('/itens-pedido', controller.listar);
router.get('/itens-pedido/:id', controller.buscarPorId);
router.post('/itens-pedido', controller.criar);
router.put('/itens-pedido/:id', controller.atualizar);
router.delete('/itens-pedido/:id', controller.deletar);

module.exports = router;
