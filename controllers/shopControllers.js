var shopServices = require('../service/shopService');

module.exports = function ShopControllers(){

    this.create = (req,res)=>{
        var value = {
            shopName:req.body.shopname,
            address:req.body.address,
            profileImage:'',
            pictureID:'',
  
        }
        shopServices.createShop(value)
        .then((data)=>{

            res.send(data)
        }).catch((err) => {
            res.send(err);
        });
    }

    this.update = (req,res)=>{
        var value = {
            shopName:req.body.shopName,
            profileImage:req.files[0].path,
            pictureID:''
        }
        shopServices.UpdateShop(value)
        .then((data)=>{
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
    }

    this.getAllShops = (req,res)=>{
        var options = {};
        shopServices.getAllShops(options).then((data)=>{
            res.send(data);
        }).catch((err) => {
            res.send(err);
        });
    }

    this.getSingle = (req,res)=>{
        var options = {id:req.params.id};
        shopServices.getSingleShop(options)
        .then((data)=>{
            res.send(data);
        }).catch((err)=>{
            res.send(err);
        });
    }

    this.deleteShop = (req, res)=>{
        var options = {id:req.params.id};
        shopServices.deleteShop(options)
        .then((data)=>{
            res.send(data);
        }).catch((err)=>{
            res.send(err);
        })
    }
}

