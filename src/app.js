const express = require("express");
const cors = require('cors')
const indexRoutes = require("./routes/index.routes");
const path = require('path')

// Initializations
const app = express();

app.use(express.urlencoded({extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(cors())
app.use(indexRoutes);

module.exports = app;
