const express = require("express");
const router = express.Router();
const multer  = require('multer')

const { signUp, login } = require("../controllers/user.controller");
const { createSauce } = require("../controllers/createSauce.controller");

const verifyToken = require('../middlewares/authJwt');

router.post("/api/auth/signup", signUp);

router.post("/api/auth/login", login);

router.post("/api/sauces", verifyToken, createSauce);

module.exports = router;
