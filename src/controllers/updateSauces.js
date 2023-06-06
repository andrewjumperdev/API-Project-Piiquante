const Sauce = require("../models/sauce");
const fs = require("fs");
const path = require('path');


exports.UpdateSauceCtrl = async (req, res) => {
  const sauceId = req.params.id;
  const sauceData = req.body;

  const sauce = await Sauce.findById(sauceId)
  const fileName = sauce.imageUrl;
  
  const routeImage = (`__dirname, '../public/uploads', fileName.split("/uploads//")[1]`)
  const filePath = path.join(routeImage);

  console.log(filePath)

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error al eliminar el archivo:', err);
      // Maneja el error según tus necesidades
      return;
    }
    console.log('Archivo eliminado correctamente');
  });

  // Vérifier si une image a été téléchargée
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
        return res.status(404).json({ message: "Salsa no encontrada" });
      }
      res.json({
        message: "Salsa actualizada exitosamente",
        sauce: updatedSauce,
      });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error interno del servidor" });
    });
};
