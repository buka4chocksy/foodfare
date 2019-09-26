var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var ProductSchema = new Schema({
    name:{type:String, lowercase:true, unique:true ,required:true},
    price:{type:Number, required:true},
    quantity:{type:Number, required:true},
    category:{type:mongoose.SchemaTypes.ObjectId, ref:'productCategory', required:true},
    shop:{type:mongoose.SchemaTypes.ObjectId, ref:'shop', required:true},
    ProductImage:String,
    pictureID:String
  

})

module.exports = mongoose.model('product', ProductSchema);