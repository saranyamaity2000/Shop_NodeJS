const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const Logger = require('../logger.js');
const logger = new Logger(path.join(rootDir, 'logs.txt'));

const router = express.Router(); // plugable into other express app 

// ------------------

router.get('/add-product', (req, res, next) => {
    let addProductPath = path.join(rootDir, 'views', 'add-product.html')
    res.sendFile(addProductPath);
});

router.post('/add-product', (req, res, next) => {
    const productname = req.body.product;
    logger.log(productname + " added!");
    res.redirect('/admin/add-product');
});

// ------------------

// exports.router =  router ;
// or
module.exports = router; // if its like this then .router not needed at end