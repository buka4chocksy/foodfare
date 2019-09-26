var express = require('express');
var app = express();
var port = process.env.Port || 8080;
var morgan = require('morgan');
var cookieparser = require('cookie-parser');
require('dotenv').config();
var router = express.Router();
var rootRouter  = require('./routes')(router);
var dbConfiguration = require('./config/db');




app.use(morgan('dev'));
app.use(express.json());//for parsing application/json
app.use(express.urlencoded({ extended: false})); //for parsing application/x-www-form-urlencoded
app.use(cookieparser());
app.use('/api', rootRouter);

dbConfiguration();


app.listen(port, function(){
    console.log("Running the server on port:", port);
});