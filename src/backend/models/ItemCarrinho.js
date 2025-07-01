// backend/models/ItemCarrinho.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ItemCarrinho = sequelize.define('ItemCarrinho', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  carrinhoId: {
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
}, {
  tableName: 'ItemCarrinho',
  timestamps: false,
});

module.exports = ItemCarrinho;
