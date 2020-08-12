const mongoose = require('mongoose');
const schema = mongoose.Schema;

const post = schema({
    userid : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    userAbout :{
    type : String,
    required : true
    },
    post : {
        type : String,
        required : true
    },
    postType : {
        type : String,
        default : null
    },
    postedAt : {
        type : Date,
        default : Date.now
    },
    lastUpdatedAt : {
        type : Date,
        default : Date.now
    },
    comments : [
        {type : schema.Types.ObjectId, ref : 'Comment'}
    ]
});


module.exports = mongoose.model('Post', post);