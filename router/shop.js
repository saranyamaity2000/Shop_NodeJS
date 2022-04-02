const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const Logger = require('../logger.js');
const logger = new Logger(path.join(rootDir, 'logs.txt'));

const router = express.Router(); // plugable into other express app 

// ------------------

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

// ------------------

// exports.router =  router ; 
// or
module.exports = router;