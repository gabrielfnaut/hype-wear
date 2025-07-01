const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega variáveis do .env

// Cria a instância do Sequelize com as variáveis de ambiente
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nome do banco
  process.env.DB_USER,     // Usuário do banco
  process.env.DB_PASS,     // Senha
  {
    host: process.env.DB_HOST,     // Host (localhost normalmente)
    port: process.env.DB_PORT || 3306, // Porta (3306 padrão do MySQL)
    dialect: 'mysql',
    logging: false, // Para ocultar logs SQL no terminal
  }
);

module.exports = sequelize;

// jsjs