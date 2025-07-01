const jwt = require('jsonwebtoken');

// Middleware para verificar se o usuário está autenticado
module.exports = (req, res, next) => {
  // Espera o token no formato: "Bearer <token>"
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ msg: 'Token não fornecido. Faça login para continuar.' });
  }

  try {
    // Verifica se o token é válido
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Adiciona os dados do usuário no objeto da requisição
    req.user = decoded;

    // Continua para a próxima função
    next();
  } catch (error) {
    return res.status(403).json({ msg: 'Token inválido ou expirado.' });
  }
};
