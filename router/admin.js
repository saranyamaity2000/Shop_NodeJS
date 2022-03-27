const express = require('express') ;
const Logger = require('../logger.js') ;
const logger = new Logger("/Users/saranyamaity/Documents/NodeJs/Udemy/ExpressJS/logs.txt") ;

const router = express.Router() ; // plugable into other express app 

// ------------------

router.get('/product/testing', (req, res, next) =>{
    logger.log(`Accessing Product Testing Page`);
    res.send('<h1>Product Testing Page</h1>') ; 
}); 

router.get('/add-product', (req, res, next) =>{
    logger.log(`Accessing Add Product Page`);
    res.send('<h1>Add Product Page </h1>') ; 
}); 

router.get('/product', (req, res, next) =>{
    logger.log("Accessing Product Page");
    res.send('<h1>Product Page</h1>') ; 
});

// ------------------

exports.router =  router ; 