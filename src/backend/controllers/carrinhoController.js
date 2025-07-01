const { Carrinho } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const carrinhos = await Carrinho.findAll();
      res.json(carrinhos);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao listar carrinhos', erro: error.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const carrinho = await Carrinho.findByPk(req.params.id);
      if (!carrinho) return res.status(404).json({ msg: 'Carrinho não encontrado' });
      res.json(carrinho);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao buscar carrinho', erro: error.message });
    }
  },

  async criar(req, res) {
    try {
      const novoCarrinho = await Carrinho.create(req.body);
      res.status(201).json(novoCarrinho);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao criar carrinho', erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const carrinho = await Carrinho.findByPk(req.params.id);
      if (!carrinho) return res.status(404).json({ msg: 'Carrinho não encontrado' });
      await carrinho.update(req.body);
      res.json(carrinho);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao atualizar carrinho', erro: error.message });
    }
  },

  async deletar(req, res) {
    try {
      const carrinho = await Carrinho.findByPk(req.params.id);
      if (!carrinho) return res.status(404).json({ msg: 'Carrinho não encontrado' });
      await carrinho.destroy();
      res.json({ msg: 'Carrinho excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao excluir carrinho', erro: error.message });
    }
  }
};
