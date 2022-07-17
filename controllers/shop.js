const Product = require("../models/product");

// path -> / (GET)
exports.getHomePage = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/index", { pageTitle: "Shop", prods: products });
    });
};

// path -> /products  (GET)
exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list", { pageTitle: "Products", prods: products });
    });
};

// path -> /orders (GET)
exports.getOrders = (req, res) => {
    res.render("shop/orders", { pageTitle: "Orders" });
}

// path -> /cart (GET)
exports.getCart = (req, res) => {
    res.render("shop/cart", {pageTitle: "Cart"});
};

// path -> /checkout (GET)
exports.getCheckout = (req, res) => {
    res.render("shop/checkout", { pageTitle: "Checkout"});
};
