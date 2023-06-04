const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET;

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.id;
  } catch (error) {
    throw new Error('Token inválido');
  }
}

const authenticate = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'No se proporcionó un token de autenticación' });
  }

  const token = req.headers.authorization.replace('Bearer ', '');
  const userId = verifyToken(token);

  req.userId = userId;
  next();
};

module.exports = authenticate;