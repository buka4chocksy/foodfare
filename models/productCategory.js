var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var  ProductCategorySchema = new Schema({
    name:{type:String, required:true, lowercase:true},
});

module.exports = mongoose.model('productCategory', ProductCategorySchema);