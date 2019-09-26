var model = require('../models/shop');
var BaseRepo =  require('../repository/BaseRepository');
var cloudinary = require('../functions/cloudinary');

var shopRepo = new BaseRepo(model);

exports.createShop = (options)=>{
    return new Promise((resolve, reject)=>{
        
                var value = {
                    shopName:options.shopName,
                    address:options.address,
                    profileImage:options.profileImage,
                    pictureID:options.pictureID
                }
                shopRepo.getSingle(value).then(result =>{
                    if(result){
                        reject("Shop Already Exists");
                    }else{
                        shopRepo.add(value).then((added)=>{
                            if(!added){
                            resolve({ success: false, message: 'Shop not Created' });
                            }else{
                                resolve({success: true, message:'Shop created Successfully'})
                            }
                        }).catch((err) => {
                            reject(err);
                        });
                    }
                })
       
    })
}

exports.UpdateShop = (options)=>{
    return new Promise((resolve, reject)=>{
        var value = {
            shopName:options.shopName,
            profileImage:options.profileImage,
            pictureID:options.pictureID
        }
        shopRepo.getSingle({shopName: new RegExp(value.shopName, "gi")}).then((exist)=>{
            if(!exist){
                resolve({success:false , message:'Shop not found !!'})
            }else{
                console.log("hello in the shop service")
                var shopId = exist.id;
               cloudinary.upload(value.profileImage).then((uploaded)=>{
                   console.log(uploaded);
                   if(!uploaded){
                    resolve({success:false , message:'image was not uploaded !!'})
                   }else{
                      value.profileImage = uploaded.url
                      value.pictureID = uploaded.Id
                      shopRepo.update(shopId, {profileImage:value.profileImage,pictureID: value.pictureID })
                      .then((updated)=>{
                          if(!updated){
                            resolve({success:false , message:'Shop not updated !!'})
                          }else{
                            resolve({success:true , message:'Shop updated !!'})
                          }
                      }).catch((err) => {
                        reject(err);
                    });
                   }
               }).catch((err) => {
                reject(err);
            });
            }
        })
    })
}

exports.getAllShops = function(options){
    return new Promise ((resolve, reject)=>{
        shopRepo.getAll().then((shops)=>{
            if(!shops){
                resolve({success:false , message:'Shops not found !!'});   
            }else{
                resolve({success:true, message: shops});
            }
        }).catch((err) => {
            reject(err);
        });

    })
}

exports.getSingleShop = function(options){
    return new Promise((resolve, reject)=>{
        shopRepo.getById(options.id).then((shop)=>{
            if(!shop){
                resolve({success:false , message:'Shop not found !!'}); 
            }else{
                resolve({success:true, message: shop}); 
            }
        }).catch((err) => {
            reject(err);
        });
    })
}

exports.deleteShop =  function(options){
    return new Promise((resolve, reject)=>{
        shopRepo.delete(options.id).then((deleted)=>{
            if(!deleted){
              resolve({success:false , message:'Shop not deleted !!'});    
            }else{
                resolve({success:true , message:'Shop deleted successfully !!'})  
            }
        }).catch((err)=>{
            reject(err);
        })
    })
}