// backend/models/Carrinho.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Carrinho = sequelize.define('Carrinho', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  clienteId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('ativo', 'finalizado'),
    defaultValue: 'ativo',
  },
}, {
  tableName: 'Carrinho',
  timestamps: false,
});

module.exports = Carrinho;
