const Sauce = require("../models/sauce");

exports.UpdateSauceCtrl = async (req, res) => {
  const userId = req.userId;
  console.log(userId)
    try {
        const sauceId = req.params.id;
        const sauceData = req.body;


        if (req.file) {
            const imageBuffer = req.file.buffer; 
            console.log(imageBuffer)
        }
    
        await Sauce.findByIdAndUpdate(sauceId, sauceData, { new: true });
        res.status(200).json(sauceData)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
  