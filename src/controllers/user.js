const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const {secretKey, expiresIn} = require("../config");


exports.signUp = async (req, res, next) => {
  const { email, password } = req.body;

  const newUser = new User({
    email: email,
    password: await User.encryptPassword(password),
  });

  const savedUser = await newUser.save();

  const payload = {
    id: savedUser._id,
    username: newUser.email
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

  res.status(200).json({ token });
  next();
};

exports.login = (req, res) => {
  try {
    User.findOne({ email: req.body.email }).then((user) => {
      
      const objectIdString = user._id.toString();
      console.log(objectIdString)

      const payload = {
        id: objectIdString,
        username: user.email
      };
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

          const token = jwt.sign(payload, secretKey, { expiresIn: '1d' });

          res.status(200).json({ token });
        });
    });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({ error: "Failed to login" });
  }
};
