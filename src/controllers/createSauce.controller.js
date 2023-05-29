const Sauce = require("../models/sauce.model");

exports.createSauce = async (req, res) => {
  const { sauce } = req.body;
  const imgSauce = req.file;

  const item = JSON.parse(sauce);

  const domain = req.hostname;

  const uri = imgSauce.originalname
  
  const fileUrl = `http://${domain}/uploads/${uri}`;

  const newSauce = new Sauce({
    name: item.name,  
    manufacturer: item.manufacturer,
    description: item.description,
    mainPepper: item.description,
    imageUrl: fileUrl,
    heat: item.heat,
    likes: 0,
    dislikes: 0,
    usersLiked: 0,
    usersDisliked: 0,
  });

  const sauceSaved = await newSauce.save();
  console.log(sauceSaved);
  res.status(200).json({message: 'Product créé'});
};
