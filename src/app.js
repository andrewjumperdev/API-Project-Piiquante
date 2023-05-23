const express = require('express');
const indexRoutes = require('./routes/index.routes');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initializations
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())
app.use(indexRoutes);   

module.exports = app;