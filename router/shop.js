const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router(); // plugable into other express app 

router.get('/', shopController.getHomePage);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

module.exports = router;