const express = require("express");
const getSauces = require("../controllers/getSauces.controller");
const { signUp, login } = require("../controllers/user.controller");

const router = express.Router();


router.get("/api/sauces", getSauces);

router.get("/api/sauces:id", (req, res) => {
    res.send('Suace')
})

router.post("/api/auth/signup", signUp);
router.post("/api/auth/login", login);



module.exports = router