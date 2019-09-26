var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

var AuthSchema = new Schema({
    fullName:{type:String, lowercase:true,required:true},
    email:{type:String, lowercase:true, unique:true ,required:true},
    username:{type:String, lowercase:true,required:true},
    password:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    status:{type:String, required:true},
    publicId:{type: mongoose.Types.ObjectId},
    statusCode:{type: Number, required:true}
})

module.exports = mongoose.model('auth', AuthSchema);