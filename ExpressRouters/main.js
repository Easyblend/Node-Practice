const express = require("express");
const { products } = require("../Products");

const app = express();

app.get("/products", (req, res) => {
  res.status(201).json([{ staus: "200" }, products]);
});

app.listen(4000, () => {
  console.log("listening in Express router folder");
});
