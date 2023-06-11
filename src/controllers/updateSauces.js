const Sauce = require("../models/sauce");
const fs = require("fs");
const path = require("path");

exports.UpdateSauceCtrl = async (req, res) => {
  const sauceId = req.params.id;
  const sauceData = req.body;

  const sauce = await Sauce.findById(sauceId);
  const fileNameUrl = sauce.imageUrl.split("/uploads//")[1];

  const deleteImage = (pathImgName) => {
    const pathFilePublic = path.join(__dirname, "..", "..", "src/public");
    const routeFile = path.join(pathFilePublic, "uploads", pathImgName);

    fs.unlink(routeFile, (err) => {
      if (err) {
        console.error("Delete file error:", err);
        return;
      }
      console.log("File successfully deleted");
    });
  };
  deleteImage(fileNameUrl);

  if (req.file) {
    const url = req.file.path.replace(/\\/g, "/").split("public/uploads");
    const http = req.protocol;
    const domain = req.get("host");
    const fileUrl = `${http}://${domain}/uploads/${url[1]}`;
    sauceData.imageUrl = fileUrl;
  }

  Sauce.findByIdAndUpdate(sauceId, sauceData, { new: true })
    .then((updatedSauce) => {
      if (!updatedSauce) {
        return res.status(404).json({ message: "Sauce not found" });
      }
      res.json({
        message: "Sauce successfully updated",
        sauce: updatedSauce,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};
