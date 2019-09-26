var model = require('../models/productCategory');
var BaseRepo  = require('../repository/BaseRepository');

var productRepo = new BaseRepo(model);

exports.createProductCategory  = (options)=>{
    console.log("am in service");
    return new Promise((reject, resolve)=>{
        var name = {
            name:options.name,   
          }
        productRepo.getSingle(name).then(data => {
            if(data){
                console.log(data);
                reject("Data Already Exists");
            }else{
                productRepo.add(name).then((added)=>{
                    if(!added){
                        resolve({ success: false, message: 'Product Category Not  Created ' });
                    }else{
                        resolve({ success: true, message: 'Product Category Created ' });
                    }
                }).catch((err) => {
                    reject(err);
                });
            }
        })
       
    })
}

exports.getAllProductCategories = (options)=>{
    return new Promise((resolve, reject)=>{
        var options = {};
        productRepo.getAll(options).then((productcategories)=>{
            if(!productcategories){
                resolve({success:false , message:'Shops not found !!'});  
            }else{
                resolve({success:true, message: productcategories});
            }
        }).catch((err)=>{
            reject(err);
        })
    })
}
