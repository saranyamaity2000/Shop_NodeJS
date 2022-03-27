const express = require('express');

const adminRoutes = require('./router/admin')['router'] ; 

const shopRoutes = require('./router/shop')['router'] ;


const app = express() ;

app.use(adminRoutes) ;

app.use(shopRoutes) ;

app.listen(3000) ; 


