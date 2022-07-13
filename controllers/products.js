const Product = require("../models/product");

exports.getAddProduct = (req, res) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title, "dummyLink.com");
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop", { pageTitle: "Shop", prods: products });
  });
};
