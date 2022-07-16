const Product = require("../models/product");

// path -> /
exports.getHomePage = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/index", { pageTitle: "Shop", prods: products });
    });
};

// path -> /products 
exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list", { pageTitle: "Products", prods: products });
    });
};

// path -> /cart
exports.getCart = (req, res) => {
    res.render("shop/cart", {pageTitle: "Cart"});
};

// path -> /checkout
exports.getCheckout = (req, res) => {
    res.render("shop/checkout", { pageTitle: "Checkout"});
};
