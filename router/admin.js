const express = require("express");
const productController = require("../controllers/products");

const router = express.Router(); // plugable into other express app

router
  .route("/add-product")
  .get(productController.getAddProduct)
  .post(productController.postAddProduct);

module.exports = router;
