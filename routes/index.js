var productcatRoutes = require('./productCategorys');
var shopRoutes = require('./shops');
var productRoutes = require('./products');
var authRoutes = require('./authRoutes');
var Router = require('express').Router();

module.exports = function (router){
     router.use('/productCategory', productcatRoutes());
     router.use('/shop', shopRoutes() );
     router.use('/products', productRoutes());
     router.use('/auth', authRoutes())
    return router;
};