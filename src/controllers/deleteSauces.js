const Sauce = require("../models/sauce");

exports.deleteSauceCtrl = (req, res) => {
  const sauceId = req.params.id;
  console.log(sauceId)
  Sauce.findByIdAndDelete(sauceId)
    .then((sauce) => {
      console.log(sauce)
      res.status(200).json(sauce);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
