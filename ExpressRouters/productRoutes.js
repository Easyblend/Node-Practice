const express = require("express");
const { products } = require("../Products");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).json([{ staus: "200" }, products]);
});

router.delete("/:id", (req, res) => {
  const id = req.params;
  res.send(id);
});

module.exports = router;
