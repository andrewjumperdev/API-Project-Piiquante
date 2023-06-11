const jwt = require("jsonwebtoken");
const { secretKey } = require("../config");

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ error: "No authentication token was provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
}

function getUserIdFromToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded.id;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

module.exports = { authenticate, getUserIdFromToken };
