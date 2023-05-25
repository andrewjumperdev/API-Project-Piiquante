const express = require("express");
const router = express.Router();

const { signUp, login } = require("../controllers/user.controller");
const { createSauce } = require("../controllers/createSauce.controller");
const {getSauces, getSaucesById} = require("../controllers/getSauces.controller")

const verifyToken = require('../middlewares/authJwt');

router.post("/api/auth/signup", signUp);

router.post("/api/auth/login", login);

router.post("/api/sauces", verifyToken, createSauce);

router.get('/api/sauces', getSauces)

router.get('/api/sauces/:id', getSaucesById);

module.exports = router;
