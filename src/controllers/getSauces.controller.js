const Sauce = require("../models/sauce.model");

exports.getSauces = async (req, res) => {
  const sauces = await Sauce.find();
  res.status(200).json(sauces);
};

exports.getSaucesById = async (req, res) => {
  const { id } = req.params;
  const sauce = await Sauce.findById(id);

  const singleSauce = new Sauce({
    _id: sauce._id,
    userId: sauce._id,
    name: sauce.name,
    manufacturer: sauce.manufacturer,
    description: sauce.description,
    mainPepper: sauce.description,
    imageUrl: sauce.imageUrl,
    heat: sauce.heat,
    likes: sauce.likes,
    dislikes: sauce.dislikes,
    usersLiked: sauce.usersLiked,
    usersDisliked: sauce.usersDisliked,
  });
  console.log(singleSauce)
  res.status(200).json({id, singleSauce});
};
