const Product = require("../models/product");

// path -> admin/add-product (GET)
exports.getAddProduct = (req, res) => {
  res.render("admin/add-product", { 
    pageTitle: "Add Product" ,
    path: "admin/add-product"
  });
};
// path -> admin/add-product (POST)

exports.postAddProduct = (req, res) => {
  [title, imgLink, price, description] = [req.body.title, req.body.imgLink , req.body.price , req.body.description]
  const product = new Product(title, imgLink, price, description);
  product.save();
  res.redirect("/");
};


// path -> admin/products (GET)
exports.getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/product-list", {
       pageTitle: "Admin Products", 
       prods: products,
       path: "admin/products"
    });
  });
};

