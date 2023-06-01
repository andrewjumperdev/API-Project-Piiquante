const Sauce = require("../models/sauce.model");

exports.likesCtrl = async (req, res) => {
  const sauceId = req.params.id;
  const { like } = req.body;
  const { userId } = await Sauce.findById(sauceId);
  const sauceUpdate = await Sauce.updateOne(
    { _id: sauceId },
    { $set: { usersLiked: like } }
  );
  res.status(200).json({ userId, like });
};
