const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

exports.signUp = (req, res, next) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  newUser
    .save()
    .then(() => res.status(200).json("user créé"))
    .catch((error) => res.status(400).json({ error }));
};

exports.login = async (req, res, next) => {    
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user || user.password !== req.body.password) {        
        res.status(401).json({ error: 'Invalid username or password' });
        return;
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
};
