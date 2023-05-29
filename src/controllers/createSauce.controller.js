const Sauce = require("../models/sauce.model");

exports.createSauce = async (req, res) => {
  const { sauce } = req.body;
  const imgSauce = req.file;

  const item = JSON.parse(sauce);

  const domain = req.hostname;

  const uri = imgSauce.originalname
  
  const fileUrl = `http://${domain}/uploads/${uri}`;

  const usrId = '64747451a1d0b7c63412c92e';

  const newSauce = new Sauce({
    userId: usrId,
    name: item.name,  
    manufacturer: item.manufacturer,
    description: item.description,
    mainPepper: item.description,
    imageUrl: fileUrl,
    heat: item.heat,
    likes: item.likes,
    dislikes: item.dislikes,
    usersLiked: ['64747451a1d0b7c63412c92e'],
    usersDisliked: ['646de3c7967fdb9b3c02cadc'],
  });

  const sauceSaved = await newSauce.save();
  res.status(200).json({message: 'Product créé'});
};
