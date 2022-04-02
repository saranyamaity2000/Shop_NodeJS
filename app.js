const path = require('path');

// rootDir is not needed here as itself its present in right root dir!

const express = require('express');

const bodyParser = require('body-parser');

const adminRoutes = require('./router/admin');

const shopRoutes = require('./router/shop');


const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // with this only forms type input can be handled! not file type

app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    let errorPath = path.join(__dirname, 'views', 'error404.html')
    res.status(404).sendFile(errorPath)
});

app.listen(3000);


