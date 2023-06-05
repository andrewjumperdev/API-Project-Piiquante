const Sauce = require("../models/sauce");
const fs = require("fs");

exports.UpdateSauceCtrl = async (req, res) => {
  const sauceId = req.params.id;

  try {
    // Buscar la sauce por su _id
    let sauce = await Sauce.findById(sauceId);

    // Verificar si se proporcionó un archivo
    if (req.file) {
      // Eliminar el archivo anterior (si existe)
      if (sauce.imageUrl) {
        fs.unlinkSync(sauce.imageUrl); // Elimina el archivo anterior de la ruta
      }

      // Actualizar la información de la sauce con el archivo cargado
      sauce.name = req.body.name;
      sauce.manufacturer = req.body.manufacturer;
      sauce.heat = req.body.heat;
      sauce.imageUrl = req.file.path; // Ruta del archivo cargado por Multer
    } else {
      // Actualizar la información de la sauce sin archivo
      sauce.name = req.body.name;
      sauce.heat = req.body.heat;
      // Actualiza otros campos según sea necesario
    }

    // Guardar los cambios en la base de datos
    await sauce.save();

    await Sauce.findByIdAndUpdate(sauceId, sauceData, { new: true });
    res.status(200).json(sauceData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
