const express = require('express');
const adminRoutes = require('./router/admin')['router'] ; 

const app = express() ;

app.use(adminRoutes) ;

app.use('/', (req, res, next) =>{
    console.log("Accessing Base Page");
    res.send('<h1>Base Page</h1>') ; 
}); 

app.listen(3000) ; 


