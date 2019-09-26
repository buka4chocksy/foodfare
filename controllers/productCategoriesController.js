var producCategoriesService = require('../service/productCategoryService');

module.exports = function producCategoriesController(){

    this.create = (req,res)=>{
        console.log("am in controller")
        var Options = {
            name:req.body.name,
        }
        producCategoriesService.createProductCategory(Options)
        .then((data)=>{
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
    }

    this.update = (req,res)=>{
        var options  = {name:req.body.name, id:req.params.id};
        producCategoriesService.UpdateProductCategory(options)
        .then((data)=>{
            res.send(data);
        }).catch((err)=>{
            res.send(err);
        });
    }

    this.delete = (req,res)=>{
        var options = {id:req.params.id};
        producCategoriesService.DeleteProductCategory(options)
        .then((data)=>{
            res.send(data);  
        }).catch((err)=>{
            res.send(err);
        });
    }

    this.getAll = (req,res)=>{
        var options = {};
        producCategoriesService.getAllProductCategories(options)
        .then((data)=>{
            res.send(data)
        }).catch((err)=>{
            res.send(err);
        });
    }

    this.getSingle = (req,res)=>{
        var options = {id:req.body.id};
        producCategoriesService.getProductCategory(options)
        .then((data)=>{
            res.send(data);
        }).catch((err)=>{
            res.send(err);
        });
    }
}