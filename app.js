const express = require('express');
const bodyParser = require('body-parser') ;

const adminRoutes = require('./router/admin').router ; 

const shopRoutes = require('./router/shop').router ;


const app = express() ;

app.use(bodyParser.urlencoded({extended: false})) ; // with this only forms type input can be handled!

app.use(adminRoutes) ;

app.use(shopRoutes) ;

app.use((req, res, next) => {
    res.status(404).send('<h1> Bhai Kiya Kar raha hain tu? Aisa koi page ni hain, Tu tera time barbad kar raha hain sirf 🤬 </h1>') ; 
}); 

app.listen(3000) ; 


