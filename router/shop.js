const express = require('express');
const productController = require('../controllers/products');

const router = express.Router(); // plugable into other express app 

router.get('/', productController.getProducts);

module.exports = router;