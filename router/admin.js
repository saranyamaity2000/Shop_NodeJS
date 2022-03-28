const express = require('express') ;

const Logger = require('../logger.js') ;
const logger = new Logger("/Users/saranyamaity/Documents/NodeJs/Udemy/ExpressJS/logs.txt") ;

const router = express.Router() ; // plugable into other express app 

// ------------------

router.get('/product', (req, res, next) =>{
    res.send('<form action="/add-product" method="POST"><input type="text" name="product_name"><button type="submit">Add Product</button</form>');
}); 

router.post('/add-product', (req, res, next) =>{
    const productname = req.body.product_name; 
    logger.log(`Product ${productname} Has Been Added Successfully!`);
    res.redirect('\product');
}); 

// ------------------

exports.router =  router ; 