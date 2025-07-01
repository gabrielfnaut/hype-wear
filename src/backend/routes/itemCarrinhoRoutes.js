const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemCarrinhoController');

// Rotas para gerenciar os itens dentro do carrinho
router.get('/itens-carrinho', controller.listar);
router.get('/itens-carrinho/:id', controller.buscarPorId);
router.post('/itens-carrinho', controller.criar);
router.put('/itens-carrinho/:id', controller.atualizar);
router.delete('/itens-carrinho/:id', controller.deletar);

module.exports = router;
