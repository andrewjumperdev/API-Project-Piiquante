const Sauce = require("../models/sauce.model");

exports.getSauces = async (req, res) => {
  const sauces = await Sauce.find();
  res.status(200).json(sauces);
};

exports.getSaucesById = async (req, res) => {
  const { id } = req.params;
  const sauce = await Sauce.findById(id); 
  res.status(200).json(sauce);

};
