const sauce = require('../models/sauce.model');

const getSauces = (req, res) => {
    res.json({message: 'Get all sauces'});
}

module.exports = getSauces;

