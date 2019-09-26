var router = require('express').Router();
var controller = require('../controllers/shopControllers');
var uploads = require('../functions/pictureUpload');
module.exports = function(){
    var shoproute = new controller();
    router.post('/', shoproute.create);
    router.put('/',uploads.any(), shoproute.update);
    router.get('/', shoproute.getAllShops);
    router.get('/:id', shoproute.getSingle);
    router.delete('/:id', shoproute.deleteShop);

    return router;
}