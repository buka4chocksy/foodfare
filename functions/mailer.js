var nodemailer = require('nodemailer');
let usename = process.env.USER
let password =  process.env.PASS

var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: usename,
        pass: password         
     }
     });
  //cloudinary password  Dentry2019..
   exports.UserAdded = function(email, statusCode,callback){
        var mailOptions = {
            from: '"Food-Fare"',
            to: email,
            subject: ' Food-Fare User Registration  ',
            html: `<center><h4></string>Hello ${email} thanks for signing up with Food-Fare, please complete your registration with the code  ${statusCode} </h4>
            </center>`
        };
        transporter.sendMail(mailOptions, callback); 
        console.log('kk')
   }

exports.ForgotPassword = function(email,message,callback){
    var mailOptions = {
        from: '"Dentry"',
        to: email,
        subject: 'Forgot email alert',
        html: `<center><h4></string>Hello ${email} your forgot password is  ${message} endevour to change the password if necessary</h4>
        </center>`
    };
    transporter.sendMail(mailOptions, callback); 
  //  console.log('kkkkkk' , email)
}