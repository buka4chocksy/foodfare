var service = require('../service/authService')
var mongoose = require('mongoose')
var randomNumber = require('random-number');
module.exports = function authController(){
    var gen = randomNumber.generator({
        min:  100
      , max:  10000
      , integer: true
      })
      
    this.register = (req,res, next)=>{
        var Options = {
            fullName:req.body.fullname,
            username:req.body.username,
            publicId: mongoose.Types.ObjectId(),
            statusCode: gen(),
            email:req.body.email,
            phoneNumber:req.body.phonenumber,
            password:req.body.password,
            status:false
        }
        service.Register(Options).then((data)=>{
            res.json(data);
        }).catch((err)=>{
            res.json(err);
        })
    }

}