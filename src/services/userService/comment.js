const Post = require('../../model/user/post');
const Comment = require('../../model/user/comment');
const { request, response } = require('express');
const comment = require('../../model/user/comment');

let service = {};

service.addComment = async(request, response)=>{
    await Comment.create(request.body)
    .then((comment)=>{
        if(comment){
            Post.updateOne({_id : request.params['postid']}, {$addToSet : {comments : comment._id}})
            .then((postupdated)=>{
                if(postupdated){
                    return response.status(200).json({success : true, message : "Comment added", comment : comment});
                }
            });
        }
    });
}

module.exports = service;