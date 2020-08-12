const Post = require('../../model/user/post');
const UserProfile = require('../../model/user/profile');
const { request, response } = require('express');


let service = {};


service.createPost = async (request, response)=>{
    await Post.create(request.body)
    .then((post)=>{
        if(post){
            UserProfile.updateOne({_id : request.params['userid']}, {$addToSet : {posts : post._id}})
            .then((updated)=>{
                if(updated){
                    return response.status(200).json({success : true, message : "Posted", post : post});
                }else{
                    return response.status(200).json({success : false, errorMessage : "Failed to update post"});
                }
            });
        }
    });
}
//get first 5 posts
service.getPosts = async(request, response)=>{
    await Post.find().sort({postedAt : -1}).limit(5).populate('comments')
    .then((posts)=>{
        if(posts){
            return response.status(200).json({success : true, posts : posts});
        }
    })
}
//get next 5 posts
service.getNextPosts = async(request, response)=>{
    await Post.find({_id : {$lt : request.params['lastpostid']}})
    .sort({postedAt  : -1})
    .limit(5)
    .populate('comments')
    .then((nextPosts)=>{
        if(nextPosts){
            return response.status(200).json({success : true, posts : nextPosts});
        }
    })
}

module.exports = service;
