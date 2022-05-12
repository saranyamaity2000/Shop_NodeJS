const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const adminData = require('./admin');

const Logger = require('../logger');
const logger = new Logger(path.join(rootDir, 'logs.txt'));

const router = express.Router(); // plugable into other express app 

const products = adminData.products;
// ------------------

router.get('/', (req, res, next) => {
    console.log("shop.js => ", products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', { pageTitle: "shop", prods: products });
});

// ------------------

// exports.router =  router ; 
// or
module.exports = router;