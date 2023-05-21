getSauceById = (req, res) => {
    const { id } = req.params;
    const sauce = sauce.findById(id);
    res.json({ message: `Get sauce with id ${id}` });
};

module.exports = getSauceById;