// Middleware para verificar se o usuário logado é administrador
module.exports = (req, res, next) => {
  // req.user é preenchido pelo authMiddleware
  if (!req.user || req.user.tipo !== 'admin') {
    return res.status(403).json({ msg: 'Acesso negado. Requer permissão de administrador.' });
  }

  next(); // Continua se for admin
};
