// backend/models/index.js
const sequelize = require('../config/database');

const Usuario = require('./Usuario');
const Produto = require('./Produto');
const Carrinho = require('./Carrinho');
const ItemCarrinho = require('./ItemCarrinho');
const Pedido = require('./Pedido');
const ItemPedido = require('./ItemPedido');

// RELACIONAMENTOS

// Usuário e Carrinho
Usuario.hasMany(Carrinho, { foreignKey: 'clienteId' });
Carrinho.belongsTo(Usuario, { foreignKey: 'clienteId' });

// Carrinho e Itens do Carrinho
Carrinho.hasMany(ItemCarrinho, { foreignKey: 'carrinhoId' });
ItemCarrinho.belongsTo(Carrinho, { foreignKey: 'carrinhoId' });

// Produto e Itens do Carrinho
Produto.hasMany(ItemCarrinho, { foreignKey: 'produtoId' });
ItemCarrinho.belongsTo(Produto, { foreignKey: 'produtoId' });

// Usuário e Pedido
Usuario.hasMany(Pedido, { foreignKey: 'clienteId' });
Pedido.belongsTo(Usuario, { foreignKey: 'clienteId' });

// Pedido e Itens do Pedido
Pedido.hasMany(ItemPedido, { foreignKey: 'pedidoId' });
ItemPedido.belongsTo(Pedido, { foreignKey: 'pedidoId' });

// Produto e Itens do Pedido
Produto.hasMany(ItemPedido, { foreignKey: 'produtoId' });
ItemPedido.belongsTo(Produto, { foreignKey: 'produtoId' });

// Exportar tudo
module.exports = {
  sequelize,
  Usuario,
  Produto,
  Carrinho,
  ItemCarrinho,
  Pedido,
  ItemPedido
};
