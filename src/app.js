const express = require('express');
const indexRoutes = require('./routes/index.routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// Initializations
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.use(multer({
    dest: path.join(__dirname, 'public/uploads')
}).single('image'))

app.use(indexRoutes);   

module.exports = app;