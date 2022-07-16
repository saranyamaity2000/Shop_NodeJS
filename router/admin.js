const express = require("express");
const adminController = require("../controllers/admin");

const router = express.Router(); // plugable into other express app

// prefix -> admin
router
  .route("/add-product")
  .get(adminController.getAddProduct)
  .post(adminController.postAddProduct);

// prefix -> admin
router.get("/products", adminController.getProducts);

module.exports = router;
