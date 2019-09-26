var mongoose  = require('mongoose');

const uri = process.env.DB_URI;
//const uri = process.env.DB_LOCAL;


module.exports = function init (){
    if(uri){
        mongoose.connect(
            uri , {
                useNewUrlParser : true,
                useCreateIndex : true
            },
            function(err){
                if(err){
                    console.log("Not connection to database", err);
                }
                else{
                    console.log("Sucessfully connected to MongoDB");
                }
            }
        );
    }else{
        throw new Error("DB URI not found, please kindly check your connection strings to mongoose");
    }
}