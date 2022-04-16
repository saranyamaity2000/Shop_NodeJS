const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const Logger = require('../logger');
const logger = new Logger(path.join(rootDir, 'logs.txt'));

const router = express.Router(); // plugable into other express app 

const products = []

// /admin/add-product => GET REQ 
router.get('/add-product', (req, res, next) => {
    // let addProductPath = path.join(rootDir, 'views', 'add-product.html')
    // res.sendFile(addProductPath);
    res.render('add-product', { pageTitle: "Add Product" });
});

// /admin/add-product => POST REQ 
router.post('/add-product', (req, res, next) => {
    const product_name = req.body.title;
    products.push({ "title": product_name })
    res.redirect('/');
});

// ------------------

exports.routes = router;
exports.products = products;
// module.exports = router; // if its like this then .router not needed at end
