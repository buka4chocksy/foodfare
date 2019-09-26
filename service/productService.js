var model = require('../models/product');
var catModel = require('../models/productCategory');
var shopModel = require('../models/shop');
var BaseRepo = require('../repository/BaseRepository');
var cloudinary = require('../functions/cloudinary');
var productRepo = new BaseRepo(model);
var  categoryRepo = new BaseRepo(catModel);
var  shopRepo = new BaseRepo(shopModel);

var checkShopExist = (shopId)=>{
 return new Promise((resolve, reject)=>{
    shopRepo.getById({_id:shopId.shop}).then((shopExist)=>{
        if(shopExist){
            resolve({success:true});
        }else{
            reject({success:false});
        }
    })
 })
}

var checkCategory = (categoryId)=>{
    return new Promise((resolve, reject)=>{
        categoryRepo.getById({_id:categoryId.category}).then((categExist)=>{
            if(categExist){
                resolve({success:true});
            }else{
                reject({success:false});
            }
        })
     })  
}


exports.CreateProduct = (options)=>{
    return new Promise((resolve, reject)=>{

        var details = {
            
            name:options.name,
            price:options.price,
            quantity:options.quantity,
            category:options.category,
            shop:options.shop,
            ProductImage:options.ProductImage,
            pictureID:options.pictureID
        }

                checkShopExist(details).then((existx)=>{
                    if(!existx){
                        reject("The shop   does not  Exists"); 
                    }else{
                        categoryRepo.getById({_id:details.category}).then((exist)=>{

                            if(!exist){
        
                                reject("The Product category  does not  Exists"); 
                            }else{
        
                                productRepo.getSingle({name:details.name}).then((exists)=>{
                                    if(exists){
                                        var currentProductId =  exists.id
        
                                        productRepo.update(currentProductId, {$inc: { price:details.price , quantity:details.quantity}})
                                        .then((updated)=>{
                                            if(!updated){
                                                resolve({success:false , message:'Product  was not Updated !!'})
           
                                            }else{
                                                resolve({success:true , message:'Product  was  Updated !!'})
         
                                            }
                                        }).catch((err)=>{
                                            reject(err);
                                        })
                                  
                                    }else{
        
                                        cloudinary.upload(details.ProductImage).then((uploaded)=>{
        
                                            if(!uploaded){
                                                resolve({success:false , message:'Product image was not uploaded !!'})
                                            }else{
        
                                                details.ProductImage = uploaded.url
                                                details.pictureID = uploaded.Id
                                               var mainInput = {           
                                                name:options.name,
                                                price:options.price,
                                                quantity:options.quantity,
                                                category:options.category,
                                                shop:options.shop,
                                                ProductImage:details.ProductImage = uploaded.url,
                                                pictureID: details.pictureID = uploaded.Id
                                            }
        
                                            productRepo.add(mainInput).then((added)=>{
                                                if(!added){
                                                    resolve({success:false, message:'Product not created '});
                                                }else{
                                                    resolve({success:true , message:'product created '});
                                                }
                                            }).catch((err)=>{
                                                reject(err);
                                            });
                        
                                            }
                                        }).catch((err)=>{
                                            reject(err);
                                        });
                                      
                                    }
                                }).catch((err)=>{
                                    reject(err);
                                });
                            }
                        })
                    }
                }).catch((err)=>{
                    reject(err);
                })
          
                //
           // }
      //  })
 
       
    })
}

