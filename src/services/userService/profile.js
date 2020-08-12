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

module.exports = service;