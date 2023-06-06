const { getUserIdFromToken } = require("../middlewares/authJwt");
const Sauce = require("../models/sauce");

exports.getSauces = async (req, res) => {
  const sauces = await Sauce.find();
  res.status(200).json(sauces);
};

exports.getSaucesById = async (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '');
  const userId = getUserIdFromToken(token);
  const { id } = req.params;
  const sauce = await Sauce.findById(id); 
  res.status(200).json(sauce);
};
