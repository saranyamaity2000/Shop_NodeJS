const express = require('express') ;
const Logger = require('../logger.js') ;
const logger = new Logger("/Users/saranyamaity/Documents/NodeJs/Udemy/ExpressJS/logs.txt") ;

const router = express.Router() ; // plugable into other express app 

// ------------------

router.get('/', (req, res, next) =>{
    logger.log("Accessing Base Page");
    res.send('<h1>Base Page</h1>') ; 
}); 

// ------------------

exports.router =  router ; 