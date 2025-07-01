const express = require('express');
const router = express.Router();
const Carrinho = require('../models/Carrinho');

// 1. Listar todos os carrinhos (GET /api/carrinhos)
router.get('/carrinhos', async (req, res) => {
  try {
    const carrinhos = await Carrinho.findAll();
    res.json(carrinhos);
  } catch (error) {
    console.error('Erro ao listar carrinhos:', error);
    res.status(500).json({ error: 'Erro ao listar carrinhos' });
  }
});

// 2. Buscar um carrinho por ID (GET /api/carrinhos/:id)
router.get('/carrinhos/:id', async (req, res) => {
  try {
    const carrinho = await Carrinho.findByPk(req.params.id);
    if (!carrinho) {
      return res.status(404).json({ error: 'Carrinho não encontrado' });
    }
    res.json(carrinho);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar carrinho' });
  }
});

// 3. Criar um novo carrinho (POST /api/carrinhos)
router.post('/carrinhos', async (req, res) => {
  try {
    const { clienteId, status } = req.body;
    const novoCarrinho = await Carrinho.create({ clienteId, status });
    res.status(201).json(novoCarrinho);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar carrinho' });
  }
});

// 4. Atualizar um carrinho (PUT /api/carrinhos/:id)
router.put('/carrinhos/:id', async (req, res) => {
  try {
    const { clienteId, status } = req.body;
    const carrinho = await Carrinho.findByPk(req.params.id);
    if (!carrinho) {
      return res.status(404).json({ error: 'Carrinho não encontrado' });
    }
    carrinho.clienteId = clienteId ?? carrinho.clienteId;
    carrinho.status = status ?? carrinho.status;
    await carrinho.save();
    res.json(carrinho);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar carrinho' });
  }
});

// 5. Deletar um carrinho (DELETE /api/carrinhos/:id)
router.delete('/carrinhos/:id', async (req, res) => {
  try {
    const carrinho = await Carrinho.findByPk(req.params.id);
    if (!carrinho) {
      return res.status(404).json({ error: 'Carrinho não encontrado' });
    }
    await carrinho.destroy();
    res.json({ mensagem: 'Carrinho excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir carrinho' });
  }
});

module.exports = router;
