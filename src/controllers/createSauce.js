const Sauce = require("../models/sauce.model");

exports.createSauce = async (req, res) => {
  const { sauce } = req.body;
  const imgSauce = req.file;

  const item = JSON.parse(sauce);

  const domain = req.hostname;

  const uri = imgSauce.originalname
  
  const fileUrl = `http://${domain}/uploads/${uri}`;


  const newSauce = new Sauce({
    userId: item.userId,
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
  res.status(200).json({message: 'Product créé'});
};
