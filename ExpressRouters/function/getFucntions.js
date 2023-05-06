const { products } = require("../../Products");

const getRequest = (req, res) => {
  res.json(products);
};
const postRequest = (req, res) => {
  const newProduct = req.params.id;
  res.json([{ newProduct: "name" }, ...products]);
};

module.exports = {
  getRequest,
  postRequest,
};
