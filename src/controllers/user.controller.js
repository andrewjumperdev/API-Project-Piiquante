const bcrypt = require('bcrypt')
const User = require("../models/user.model");
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10)
  console.log(hashPassword)
  const newUser = new User({
    email: req.body.email,
    password: hashPassword,
  });
  newUser
    .save()
    .then(() => res.status(200).json("user créé"))
    .catch((error) => res.status(400).json({ error }));
};

exports.login = async (req, res) => {    
    try {
      const user = await User.findOne({ email: req.body.email });
      const match = await bcrypt.compare(req.body.password, user.password);
      console.log(match)
      if (!user || !match) {        
        res.status(401).json({ error: 'Invalid username or password' });
        return;
      }
  
      res.status(200).json({ 
        message: 'Login successful',
      });
    } catch (error) {
      console.error('Error finding user:', error);
      res.status(500).json({ error: 'Failed to login' });
    }
};
