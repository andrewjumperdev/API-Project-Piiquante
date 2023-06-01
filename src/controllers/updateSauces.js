const Sauce = require("../models/sauce.model");

exports.UpdateSauceCtrl = async (req, res) => {
    try {
        const sauceId = req.params.id;
        const sauceData = req.body;

        if (req.file) {
            const imageBuffer = req.file.buffer; 
            console.log(imageBuffer)
        }
    
        await Saucee.findByIdAndUpdate(sauceId, sauceData, { new: true });
        res.status(200).json(sauceId, sauceData)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
  