const express = require('express');
const indexRoutes = require('./routes/index.routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'uploads/'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

// Initializations
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.use(multer({
    storage,
}).single('image'))

app.use(indexRoutes);   

module.exports = app;