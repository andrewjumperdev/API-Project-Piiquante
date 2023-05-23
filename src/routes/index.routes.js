const express = require("express");
const { signUp, login } = require("../controllers/user.controller");
const { createSauce } = require("../controllers/createSauce.controller");

const router = express.Router();

router.post("/api/auth/signup", signUp);

router.post("/api/auth/login", login);

router.post("/api/sauces", createSauce);

module.exports = router