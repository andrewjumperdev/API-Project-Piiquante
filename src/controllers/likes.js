const { getUserIdFromToken } = require("../middlewares/authJwt");
const Sauce = require("../models/sauce");

exports.likesCtrl = async (req, res) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  const userId = getUserIdFromToken(token);

  const sauceId = req.params.id;
  const { like } = req.body;
  const sauce = await Sauce.findById(sauceId);

  console.log(like);

  if (like === 1) {
    await Sauce.findByIdAndUpdate(sauceId, { $inc: { likes: 1 } });
    sauce.usersLiked.push(userId);
  }
  if (like === -1) {
    await Sauce.findByIdAndUpdate(sauceId, { $inc: { dislikes: 1 } });
    sauce.usersDisliked.push(userId);
  }
  await sauce.save();
  res.status(200).json({ like, userId });
};
