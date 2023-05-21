const express = require('express');
const indexRoutes = require('./routes/index.routes');
const cors = require('cors');

// Initializations
const app = express();
app.use(express.json());

app.use(cors())
app.use(indexRoutes);   

module.exports = app;