const express = require("express");

const app = express();

app.use("/products", require("./productRoutes"));

app.listen(4000, () => {
  console.log("listening in Express router folder");
});
