const Sauce = require("../models/sauce");
const fs = require("fs");
const path = require("path");

exports.deleteSauceCtrl = async (req, res) => {
  const sauceId = req.params.id;
  const sauce = await Sauce.findById(sauceId);

  const fileNameUrl = sauce.imageUrl.split("/uploads//")[1];

  function deleteImage(pathImgName) {
    const pathFilePublic = path.join(__dirname, "..", "..", "src/public");
    const routeFile = path.join(pathFilePublic, "uploads", pathImgName);

    fs.unlink(routeFile, (err) => {
      if (err) {
        console.error("Delete file error:", err);
        return;
      }
      console.log("File successfully deleted");
    });
  }

  Sauce.findByIdAndDelete(sauceId);
  deleteImage(fileNameUrl)
    .then((sauce) => {
      console.log(sauce);
      res.status(200).json(sauce);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
