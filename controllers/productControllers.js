var productService = require('../service/productService');

module.exports = function productController(){
    this.create = (req, res)=>{
        var productDetails = {
            name:req.body.name,
            price:req.body.price,
            quantity:req.body.quantity,
            category:req.body.category,
            shop:req.body.shop,
            ProductImage:req.files[0].path
         
        }
        productService.CreateProduct(productDetails)
        .then((data)=>{
            res.send(data)
        }).catch((err) => {
            res.send(err);
        });
    }
}