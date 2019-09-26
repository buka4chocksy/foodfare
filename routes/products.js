var router = require('express').Router();
var controller = require('../controllers/productControllers');
var uploads = require('../functions/pictureUpload');

module.exports = function(){
    var productCont = new controller();
    router.post('/', uploads.any(), productCont.create);
    return router;
}