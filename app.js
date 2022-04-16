const path = require('path');

// rootDir is not needed here as itself its present in right root dir!

const express = require('express');

const bodyParser = require('body-parser');

const adminData = require('./router/admin');

const shopRoutes = require('./router/shop');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false })); // with this only forms type input can be handled! not file type

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    // let errorPath = path.join(__dirname, 'views', 'error404.html');
    // no need for this errorPath file , as we are not sending HTML file this time !
    res.status(404).render('error404', { pageTitle: "PageNotFound" });
});

app.listen(3000);


