let UserAccount = require('../../model/user/userAccount');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

let service = {};

service.login = async(request, response)=>{
    await UserAccount.findOne({emailid : request.body.emailid})
    .then((user)=>{
        if(user){
            bcrypt.compare(request.body.password, user.password)
            .then((matchedpassword)=>{
                if(matchedpassword){
                    const payload = {
                        user : {
                            userid : user._id
                        }
                    };

                    jwt.sign(payload , "secret", {expiresIn : 36000}, (err, token) => {
                         if(err)  throw err;
                         return response.status(200).json({success :true , emailid : user.emailid , userid : user._id ,username : user.username, token : token});

                         });

                }else{
                    return response.status(200).json({success : false, errorMessage : "Password Incorrect"})

                }
            })
        }else{
            return response.status(200).json({success : false, errorMessage : "No account found for this email"})
        }
    });
}


module.exports = service;
