const express = require('express');
const routes = express.Router();
const registerService = require('../services/userService/register'); 
const postService = require('../services/userService/post');
const commentService = require('../services/userService/comment');
const loginService = require('../services/userService/login');
const profileService = require('../services/userService/profile');
const { response } = require('express');
const imageScale = require('../middleware/imageScailing');


//ping server
routes.get('/pingServer', (request, response)=>{
    return response.status(200).json({message : "Connected to server..."});
})

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

routes.get('/userLists/:userid', (request, response)=>{
    return profileService.getUserLists(request, response);
})
//get user details
routes.get('/getProfile/:userid', (request, response)=>{
    
    return profileService.getProfile(request, response);
});
//create Post
routes.post('/createPost/:userid', imageScale, (request, response)=>{
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

routes.delete('/deletePost/:userid/:postid', (request, response)=>{
    return postService.deletePost(request, response);
});

//add Comment
routes.post('/addComment/:userid/:postid', (request, response)=>{
    return commentService.addComment(request, response);
});

//get Post Type
// routes.get('/getPostType', (request, response)=>{
//     return 
// })

//upload profile pic
routes.post('/uploadProfilePic/:userid', imageScale,(request, response)=>{
    return profileService.updateProfilePic(request, response);
});

//delete profile pic
routes.delete('/deleteProfilePic/:userid', (request, response)=>{
    
    return profileService.deleteProfilePic(request, response);
});



module.exports = routes;

