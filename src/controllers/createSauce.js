const Sauce = require("../models/sauce");
const { getUserIdFromToken } = require("../middlewares/authJwt");

exports.createSauce = async (req, res) => {
  const { sauce } = req.body;
  const imgSauce = req.file;

  const item = JSON.parse(sauce);

  const http = req.protocol;
  const domain = req.get("host");

  const uri = imgSauce.filename;

  const fileUrl = `${http}://${domain}/uploads/${uri}`;

  const token = req.headers.authorization.replace("Bearer ", "");
  const userId = getUserIdFromToken(token);

  const newSauce = new Sauce({
    userId: userId,
    name: item.name,
    manufacturer: item.manufacturer,
    description: item.description,
    mainPepper: item.description,
    imageUrl: fileUrl,
    heat: item.heat,
    likes: item.likes,
    dislikes: item.dislikes,
    usersLiked: [],
    usersDisliked: [],
  });
  await newSauce.save();
  res.status(200).json({ message: "Product created" });
};
