const mongoose = require("mongoose");

const MONGO_URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}.${process.env.MONGOURL}`;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("Database is conneted"))
  .catch((err) => console.log(err));
