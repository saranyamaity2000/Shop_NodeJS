const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const productController = require('../controllers/products');

const router = express.Router(); // plugable into other express app 

router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

module.exports = router;
