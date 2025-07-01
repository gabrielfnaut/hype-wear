const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async registrar(req, res) {
    try {
      const { nome, email, senha, tipo } = req.body;
      const hash = await bcrypt.hash(senha, 10);
      const usuario = await Usuario.create({ nome, email, senha: hash, tipo });
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao registrar usuário', erro: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const usuario = await Usuario.findOne({ where: { email } });

      if (!usuario) return res.status(404).json({ msg: 'Usuário não encontrado' });

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      if (!senhaCorreta) return res.status(401).json({ msg: 'Senha inválida' });

      const token = jwt.sign(
        { id: usuario.id, tipo: usuario.tipo },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );

      res.json({ msg: 'Login realizado com sucesso', token });
    } catch (error) {
      res.status(500).json({ msg: 'Erro no login', erro: error.message });
    }
  }
};
