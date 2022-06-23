const products = [];

exports.getAddProduct = (req, res) => {
    res.render('add-product', { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res) => {
    const product_name = req.body.title;
    products.push({ "title": product_name })
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    res.render('shop', { pageTitle: "Mangz", prods: products });
};