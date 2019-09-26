var model = require('../models/auth');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var mailer = require('../functions/mailer')
exports.Register = function(Options){

    return new Promise((resolve , reject)=>{
        if(Options.fullName == null || Options.fullName == '' || Options.email == null || Options.email =='' || Options.username == null || Options.username ==''){
            resolve({success:false , message:'Empty filled cannot be sumitted !!!'})
        }else{
            let hash = bcrypt.hashSync(Options.password ,10 )
            var details ={
                fullName:Options.fullName,
                email:Options.email,
                username:Options.username,
                password:hash,
                status:Options.status,
                statusCode:Options.statusCode,
                publicId:Options.publicId,
                phoneNumber:Options.phoneNumber

            }

            model.findOne({email:Options.email}).then(exists =>{
                if(!exists){
                    model.create(details).then(created =>{
                        if(created){
                         mailer.UserAdded(Options.email,Options.statusCode, function(err , user){
                             if(err){
                                 resolve({success:false , message:'Registration not successful'})
                             }else{
                                resolve({success:true , message:'Registration  successful'})  
                             }
                         })
                        }
                    })
                }else{
                    resolve({success:false , message:'User already exists'})   
                }
            }).catch(err =>{
                reject(err)
            })
        }
    })
}