// backend/models/Pedido.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  clienteId: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  valorTotal: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pendente', 'concluido', 'cancelado'),
    defaultValue: 'pendente',
  },
  nomeEntrega: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  enderecoEntrega: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefoneEntrega: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Pedido',
  timestamps: true, // salva data do pedido
});

module.exports = Pedido;
