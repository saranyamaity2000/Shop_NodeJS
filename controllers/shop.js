const Product = require("../models/product");
const Cart = require("../models/cart");

// path -> / (GET)
exports.getHomePage = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/index", {
            pageTitle: "Shop",
            prods: products,
            path: "/"
        });
    });
};

// path -> /products  (GET)
exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list", {
            pageTitle: "Products",
            prods: products,
            path: "/products"
        });
    });
};

// path -> /orders (GET)
exports.getOrders = (req, res) => {
    res.render("shop/orders", {
        pageTitle: "Orders",
        path: "/orders"
    });
}

// path -> /cart (GET)
exports.getCart = (req, res) => {
    Cart.getCart(cart => {
        res.render("shop/cart", {
            pageTitle: "Cart",
            path: "/cart",
            prods : cart.products,
            totalPrice : cart.totalPrice
        });
    }) ; 
};

// path -> /cart (POST)
exports.postCart = (req, res) => {
    id = req.body.productId;
    Product.findbyId(id , product => {
        Cart.addProduct(product);
        res.redirect('/cart');
    }) ; 
};

// path -> /checkout (GET)
exports.getCheckout = (req, res) => {
    res.render("shop/checkout", {
        pageTitle: "Checkout",
        path: "/checkout"
    });
};


// dyamic route controllers ---->


// path -> /products/:productId 
exports.getDetails = (req, res) => {
    id = req.params.productId;
    // Product.findbyId(id, product => res.send(product));
    Product.findbyId(id, product =>
        res.render("shop/product-detail", {
            pageTitle: `${product.title}`,
            product: product,
            path: "/products"
        })
    );
};

