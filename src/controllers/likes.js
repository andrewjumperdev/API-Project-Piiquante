const { getUserIdFromToken } = require("../middlewares/authJwt");
const Sauce = require("../models/sauce");

exports.likesCtrl = async (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '');
  const userId = getUserIdFromToken(token);

  const sauceId = req.params.id;
  const { like } = req.body;
  const sauce = await Sauce.findById(sauceId);

  // Modifica los campos con los nuevos valores

  if(like === -1) {
    sauce.dislikes = Math.abs(like)
    sauce.usersDisliked
  } else {
    sauce.likes = like;
    sauce.usersLiked = userId;
  }


  // Guarda los cambios en la base de datos
  await sauce.save();
  res.status(200).json({ like, userId });
};
