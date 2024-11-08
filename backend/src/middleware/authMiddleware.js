const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Token gerekli' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token bulunamadı' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Geçersiz token' });
  }
};
