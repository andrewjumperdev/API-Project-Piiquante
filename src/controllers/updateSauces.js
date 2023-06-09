const Sauce = require("../models/sauce");
const fs = require("fs");
const path = require('path');


exports.UpdateSauceCtrl = async (req, res) => {
  const sauceId = req.params.id;
  const sauceData = req.body;

  const sauce = await Sauce.findById(sauceId)
  const fileNameUrl = sauce.imageUrl.split("/uploads//")[1];


  function eliminarArchivoImagen(nombreArchivo) {
    const rutaCarpetaPublic = path.join(__dirname, '..', '..', 'public');
    const rutaArchivo = path.join(rutaCarpetaPublic, 'uploads', nombreArchivo);
  
    // Verificar si el archivo existe
   
    console.log( fs.existsSync(rutaArchivo))
    // if (fs.existsSync(rutaArchivo)) {
    //   // Eliminar el archivo
    //   fs.unlinkSync(rutaArchivo);
    //   console.log('Archivo eliminado exitosamente.');
    // } else {
    //   console.log(rutaArchivo)
    //   console.log('El archivo no existe.');
    // }
  }
  eliminarArchivoImagen(fileNameUrl)

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
