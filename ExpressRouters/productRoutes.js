const express = require("express");
const { products } = require("../Products");
const { getRequest, postRequest } = require("./function/getFucntions");
const router = express.Router();

router.get("/", (req, res) => {
  getRequest(req, res);
});

router.post("/", (req, res) => {
  postRequest(req, res);
});

module.exports = router;
