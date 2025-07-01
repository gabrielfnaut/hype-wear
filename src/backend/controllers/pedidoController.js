const { Pedido } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const pedidos = await Pedido.findAll();
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao listar pedidos', erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      if (!pedido) return res.status(404).json({ msg: 'Pedido não encontrado' });
      res.json(pedido);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao buscar pedido', erro: error.message });
    }
  },

  async criar(req, res) {
    try {
      const novoPedido = await Pedido.create(req.body);
      res.status(201).json(novoPedido);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao criar pedido', erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      if (!pedido) return res.status(404).json({ msg: 'Pedido não encontrado' });
      await pedido.update(req.body);
      res.json(pedido);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao atualizar pedido', erro: error.message });
    }
  },

  async deletar(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      if (!pedido) return res.status(404).json({ msg: 'Pedido não encontrado' });
      await pedido.destroy();
      res.json({ msg: 'Pedido excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao excluir pedido', erro: error.message });
    }
  }
};
