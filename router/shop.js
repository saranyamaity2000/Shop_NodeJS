const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router(); // plugable into other express app 

router.get('/', shopController.getHomePage);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

router.get('/orders', shopController.getOrders);


// dynamic routes at the end better , as product/aything will be treated as parameter to the route. Like product/delete if product/delete handled after dynamic route!

router.get('/products/:productId', shopController.getDetails);

module.exports = router;