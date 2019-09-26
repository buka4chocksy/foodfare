var router = require('express').Router();
var Controller = require('../controllers/productCategoriesController');
 

module.exports = function(){
var catcontrol = new Controller()
router.post('/', catcontrol.create);
router.put('/:id', catcontrol.update);
router.delete('/:id',catcontrol.delete);
router.get('/', catcontrol.getAll);
router.get('/:id', catcontrol.getSingle);
return router;
}