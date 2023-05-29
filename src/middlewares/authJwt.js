const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/user.model");

module.exports = verifyToken = async (req, res, next) => {
  const reqToken = req.headers.authorization.split("Bearer ");

  const token = reqToken[1];
  
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  const decoded = jwt.verify(token, config.SECRET); // Variable ENV

  const user = await User.findById(decoded.id, { password: 0 });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  next();
};
