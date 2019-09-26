var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var ShopSchema = new Schema({
    productId:[{type:mongoose.SchemaTypes.ObjectId, ref:"product", required:true}],
    shopName:{type:String, lowercase:true, unique:true ,required:true},
    address:{type:String, lowercase:true, required:true},
    profileImage:String,
    pictureID:String
  
})



module.exports = mongoose.model('shop', ShopSchema);