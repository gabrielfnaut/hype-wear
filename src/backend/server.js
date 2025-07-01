// backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Configurações básicas
app.use(cors()); // Permite requisições de outros domínios (ex: front separado)
app.use(express.json()); // Permite receber JSON no corpo da requisição

// Importa todos os modelos e a conexão Sequelize
const db = require('./models');

// Teste de conexão com o banco de dados
db.sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao MySQL com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MySQL:', err);
  });

// Sincroniza os modelos com o banco de dados (cria/atualiza tabelas)
db.sequelize.sync({ alter: true }) // alter = atualiza sem apagar; force = recria tudo
  .then(() => {
    console.log('📦 Tabelas sincronizadas com o banco');
  })
  .catch((err) => {
    console.error('❌ Erro ao sincronizar tabelas:', err);
  });

// Rota raiz de teste (GET http://localhost:3000/)
app.get('/', (req, res) => {
  res.json({ msg: '🚀 API HypeWear Online' });
});

// ROTAS DA API

// Usuários (cadastro e login)
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/api/usuarios', usuarioRoutes);

// Carrinhos (criar, listar, atualizar, deletar)
const carrinhoRoutes = require('./routes/carrinhoRoutes');
app.use('/api', carrinhoRoutes);

// Produtos (CRUD completo)
const produtoRoutes = require('./routes/productRoutes');
app.use('/api', produtoRoutes);

// Pedidos (finalizar compra, listar, atualizar status)
const pedidoRoutes = require('./routes/pedidoRoutes');
app.use('/api', pedidoRoutes);

// Itens do Pedido (produtos incluídos no pedido)
const itemPedidoRoutes = require('./routes/itemPedidoRoutes');
app.use('/api', itemPedidoRoutes);

// Itens do Carrinho (produtos no carrinho do usuário)
const itemCarrinhoRoutes = require('./routes/itemCarrinhoRoutes');
app.use('/api', itemCarrinhoRoutes);

// middlewares (opcional, para autenticação, validação, etc.)
const authMiddleware = require('./middlewares/authMiddleware');
app.use('/api/pedidos', authMiddleware, pedidoRoutes); // Protegida



// Você pode adicionar também: itemCarrinhoRoutes.js futuramente se quiser separar os itens do carrinho

// ==============================

// Inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
