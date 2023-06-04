const Sauce = require("../models/sauce");

exports.createSauce = async (req, res) => {
  const { sauce } = req.body;
  const imgSauce = req.file;

  const item = JSON.parse(sauce);

  const domain = req.hostname;

  const uri = imgSauce.fieldname;
  
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

  console.log(newSauce.userId)

  await newSauce.save();
  res.status(200).json({message: 'Product créé'});
};
