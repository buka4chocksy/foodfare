var router = require('express').Router();
var Controller = require('../controllers/authController');
 

module.exports = function(){
var Authcontrol = new Controller()
router.post('/register', Authcontrol.register);

return router;
}