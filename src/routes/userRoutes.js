const express = require('express');
const routes = express.Router();
const registerService = require('../services/userService/register'); 
const postService = require('../services/userService/post');
const commentService = require('../services/userService/comment');
const loginService = require('../services/userService/login');
const profileService = require('../services/userService/profile');




//login
routes.post('/login', (request, response)=>{
    return loginService.login(request, response);
});

//register
routes.post('/register', (request, response)=>{
    return registerService.register(request, response);
});

//get short profile
routes.get('/getShortProfile/:userid', (request, response)=>{
    
    return profileService.getShortProfile(request, response);
});
//get user details
routes.get('/getProfile/:userid', (request, response)=>{
    
    return profileService.getProfile(request, response);
});
//create Post
routes.post('/createPost/:userid', (request, response)=>{
    return postService.createPost(request, response);
});
//get first 5 posts
routes.get('/getPosts', (request, response)=>{ 
    return postService.getPosts(request, response);
});
//get next 5 posts
routes.get('/getNextPosts/:lastpostid', (request, response)=>{
    return postService.getNextPosts(request, response);
});

//add Comment
routes.post('/addComment/:userid/:postid', (request, response)=>{
    return commentService.addComment(request, response);
});

//get Post Type
// routes.get('/getPostType', (request, response)=>{
//     return 
// })


module.exports = routes;

