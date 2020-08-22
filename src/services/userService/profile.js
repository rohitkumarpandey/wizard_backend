const UserProfile = require('../../model/user/profile');
const { request, response } = require('express');

let service = {};

service.getProfile = async(request, response)=>{
    await UserProfile.findById({_id : request.params['userid']})
    .populate('posts')
    .then((user)=>{
        if(user) return response.status(200).json({success : true, user : user});
        return response.status(200).json({success : false, errorMessage : "Failed to fetch user details"});
    });
}

service.getShortProfile = async(request, response)=>{
    await UserProfile.findById({_id : request.params['userid']})
    .then((user)=>{
        if(user) return response.status(200).json({success : true, user : user});
        return response.status(200).json({success : false, errorMessage : "Failed to fetch user details"});
    });
}

service.updateProfilePic = async(request, response)=>{
    await UserProfile.findByIdAndUpdate({_id : request.params['userid']}, {profilePic : request.body.profilePic})
    .then((updated)=>{
        if(updated){
            
            return response.status(200).json({success : true, user : updated});
        }else{
            return response.status(200).json({success : false, errorMessage : 'Failed to update Profile picture.'});

        }
    })
}

service.deleteProfilePic = async(request, response)=>{
    await UserProfile.findByIdAndUpdate({_id : request.params['userid']}, {profilePic : null})
    .then((profilePicDeleted)=>{
        if(profilePicDeleted){
            
            return response.status(200).json({success : true, message : 'Profile picture deleted'});
        }else{
            return response.status(200).json({success : false, errorMessage : 'Failed to delete Profile picture.'});

        }
    })
}

module.exports = service;