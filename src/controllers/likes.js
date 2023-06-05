const { getUserIdFromToken } = require("../middlewares/authJwt");
const Sauce = require("../models/sauce");

exports.likesCtrl = async (req, res) => {
  const token = req.headers.authorization.replace('Bearer ', '');
  const userId = getUserIdFromToken(token);

  const sauceId = req.params.id;
  const { like } = req.body;
  const sauceUpdate = await Sauce.updateOne(
    { _id: sauceId },
    { $set: { usersLiked: like } }
  );
  res.status(200).json({ userId, like });
};
