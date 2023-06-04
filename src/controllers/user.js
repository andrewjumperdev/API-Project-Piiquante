const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.signUp = async (req, res, next) => {
  const { email, password } = req.body;

  const newUser = new User({
    email: email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, //24hr
  });
  res.status(200).json({ token });
  next();
};

exports.login = (req, res) => {
  try {
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      const match = bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid || !match) {
            return res
              .status(401)
              .json({ error: "Invalid username or password" });
          }

          const token = jwt.sign({ id: user._id }, config.SECRET, {
            expiresIn: 86400, //24hr
          });
          res.status(200).json({ token });
        });
    });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({ error: "Failed to login" });
  }
};
