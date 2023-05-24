const Sauce = require('../models/sauce.model');

exports.createSauce = async(req, res) => {
    const sauce = req.body
    const imgSauce = req.file

    const newSauce = new Sauce(sauce)

    const sauceSaved = await newSauce.save()

    console.log(sauceSaved)
};