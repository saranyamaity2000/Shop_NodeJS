const http = require('http');

const express = require('express');

const app = express()

app.use('/users/count', (req, res, next) => {
    console.log(`Accessing count page`);
    res.send('<h1>Total Users - infinity</h1>');
});

app.use('/users', (req, res, next) => {
    console.log("Accessing Users");
    res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log("Accessing Base Page");
    res.send('<h1>Base Page</h1>');
});

app.listen(3000)