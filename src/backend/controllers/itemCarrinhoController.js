const { ItemCarrinho } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const itens = await ItemCarrinho.findAll();
      res.json(itens);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao listar itens do carrinho', erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const item = await ItemCarrinho.findByPk(req.params.id);
      if (!item) return res.status(404).json({ msg: 'Item não encontrado' });
      res.json(item);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao buscar item', erro: error.message });
    }
  },

  async criar(req, res) {
    try {
      const novoItem = await ItemCarrinho.create(req.body);
      res.status(201).json(novoItem);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao adicionar item', erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const item = await ItemCarrinho.findByPk(req.params.id);
      if (!item) return res.status(404).json({ msg: 'Item não encontrado' });
      await item.update(req.body);
      res.json(item);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao atualizar item', erro: error.message });
    }
  },

  async deletar(req, res) {
    try {
      const item = await ItemCarrinho.findByPk(req.params.id);
      if (!item) return res.status(404).json({ msg: 'Item não encontrado' });
      await item.destroy();
      res.json({ msg: 'Item removido com sucesso' });
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao excluir item', erro: error.message });
    }
  }
};
