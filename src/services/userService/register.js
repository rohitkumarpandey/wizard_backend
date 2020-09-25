let UserAccount = require('../../model/user/userAccount');
let UserProfile = require('../../model/user/profile');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


let service = {};

service.register = async(request, response)=>{
    
    await UserAccount.findOne({emailid : request.body.emailid})
    .then((userAccount)=>{
        //if user exis`ts
        if(userAccount){
           return response.status(500).json({success : false, errorMessage : "This email is already taken" });

        }
    else{
             const pass = request.body.password;

             bcrypt.hash(pass, 10)
            .then((hashedpassword)=>{
                request.body.password = hashedpassword;
            })
            .then(()=>{
                UserAccount.create({emailid : request.body.emailid, password : request.body.password, username : request.body.username})
                .then((user)=>{
                    if(user){
                        UserProfile.create({_id : user._id, username : request.body.username,about : request.body.about})
                        .then((profile)=>{
                            if(profile){
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
                                return response.status(200).json({success : false, errormessage : "Restration failed"});
                            }
                        })
                    }
                    
                })
            })


}})
    
}



module.exports = service;