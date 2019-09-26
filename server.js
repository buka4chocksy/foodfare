var express = require('express');
var app = express();
var port = process.env.Port || 8080;
var morgan = require('morgan');
var cookieparser = require('cookie-parser');
require('dotenv').config();
var router = express.Router();
var rootRouter  = require('./routes')(router);
var dbConfiguration = require('./config/db');
var cors = require('cors')



app.use(morgan('dev'));
app.use(express.json());//for parsing application/json
app.use(express.urlencoded({ extended: false})); //for parsing application/x-www-form-urlencoded
app.use(cookieparser());
app.use(cors())
app.use('/api', rootRouter);

app.get('/', function(req, res){
    res.json({message:"hello world"});
});

dbConfiguration();


module.exports = app;