const { ItemPedido } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const itens = await ItemPedido.findAll();
      res.json(itens);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao listar itens do pedido', erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const item = await ItemPedido.findByPk(req.params.id);
      if (!item) return res.status(404).json({ msg: 'Item não encontrado' });
      res.json(item);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao buscar item', erro: error.message });
    }
  },

  async criar(req, res) {
    try {
      const novoItem = await ItemPedido.create(req.body);
      res.status(201).json(novoItem);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao adicionar item ao pedido', erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const item = await ItemPedido.findByPk(req.params.id);
      if (!item) return res.status(404).json({ msg: 'Item não encontrado' });
      await item.update(req.body);
      res.json(item);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao atualizar item do pedido', erro: error.message });
    }
  },

  async deletar(req, res) {
    try {
      const item = await ItemPedido.findByPk(req.params.id);
      if (!item) return res.status(404).json({ msg: 'Item não encontrado' });
      await item.destroy();
      res.json({ msg: 'Item excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao excluir item do pedido', erro: error.message });
    }
  }
};
