'use strict';

const express = require('express');
const notFoundHandler = require('../src/error-handlers/404');
const errorHandler = require('../src/error-handlers/500');
const logger = require('../src/middleware/ logger');
const validator = require('../src/middleware/validator')


const app = express();

app.use(logger);

app.get(`/person`, validator(), (req, res) => {
    res.status(200).json({
      name: `${req.query.name}`,
    });
  });

app.get("/", (req, res) => {
    res.status(200).send('Welcome to advance course');
});

app.get("/data",(req,res)=>{
    res.json({
        id:1,
        first_name:'Tasneem',
        last_name:'Maqableh',
        email:'tasneem.123@gmail.com'
    });
});



app.get('/bad', (req, res) => {
    let num = 20;
    let result = num.forEach((y) => {
        console.log(y);
    });
    res.status(500).send(result);
})

app.use('*', notFoundHandler);
app.use(errorHandler);



function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}
module.exports = {
    app: app,
    start: start,
}