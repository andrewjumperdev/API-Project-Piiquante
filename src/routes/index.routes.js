const express = require("express");
const router = express.Router();
const verifyToken = require('../middlewares/authJwt');

const { signUp, login } = require("../controllers/user.controller");
const { createSauce } = require("../controllers/createSauce.controller");
const {getSauces, getSaucesById} = require("../controllers/getSauces.controller")
const { likesCtrl } = require("../controllers/likesCtrl");

router.post("/api/auth/signup", signUp);

router.post("/api/auth/login", login);

router.post("/api/sauces", verifyToken, createSauce);

router.get('/api/sauces', getSauces)

router.get('/api/sauces/:id', getSaucesById);

router.post('/api/sauces/:id/like', likesCtrl);


module.exports = router;
