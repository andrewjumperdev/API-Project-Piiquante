const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authJwt");

const { signUp, login } = require("../controllers/user");
const { createSauce } = require("../controllers/createSauce");
const {getSauces, getSaucesById} = require("../controllers/getSauces");
const { likesCtrl } = require("../controllers/likes");
const { UpdateSauceCtrl } = require("../controllers/updateSauces");
const { deleteSauceCtrl } = require("../controllers/deleteSauces");

router.post("/api/auth/signup", signUp);

router.post("/api/auth/login", login);

router.post("/api/sauces", verifyToken, createSauce);

router.get("/api/sauces", getSauces);

router.get("/api/sauces/:id", getSaucesById);

router.post("/api/sauces/:id/like", likesCtrl);

router.put("/api/sauces/:id", UpdateSauceCtrl);

router.delete("/api/sauces/:id", deleteSauceCtrl);

module.exports = router;
