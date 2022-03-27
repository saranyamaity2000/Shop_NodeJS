const express = require('express') ;

const router = express.Router() ; // plugable into other express app 

// ------------------

router.use('/add-product', (req, res, next) =>{
    console.log(`Accessing Add Product Page`);
    res.send('<h1>Add Product Page </h1>') ; 
}); 

router.use('/product', (req, res, next) =>{
    console.log("Accessing Product Page");
    res.send('<h1>Product Page</h1>') ; 
});

// ------------------

exports.router =  router ; 