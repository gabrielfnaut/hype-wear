// backend/models/ItemPedido.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ItemPedido = sequelize.define('ItemPedido', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  pedidoId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  produtoId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tamanho: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  precoUnitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  tableName: 'ItemPedido',
  timestamps: false,
});

module.exports = ItemPedido;
