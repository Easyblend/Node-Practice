const express = require("express");
const connectDatabase = require("../confi/dataBase");
require("dotenv").config();
const app = express();

connectDatabase();

app.use("/products", require("./productRoutes"));

app.listen(4000, () => {
  console.log("listening in Express router folder");
});
