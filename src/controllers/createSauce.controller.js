const Sauce = require("../models/sauce.model");
const path = require('path');

exports.createSauce = async (req, res) => {
  const { sauce } = req.body;
  const imgSauce = req.file;

  const item = JSON.parse(sauce);

  const uri = imgSauce.path
  const url =  uri.replace(`C:\\Users\\andre\\Desktop\\ProjectOpenClassrooms\\API-Project-Piiquante\\`, 'http://localhost:3000/')

  const newSauce = new Sauce({
    name: item.name,
    manufacturer: item.manufacturer,
    description: item.description,
    mainPepper: item.description,
    imageUrl: url,
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
