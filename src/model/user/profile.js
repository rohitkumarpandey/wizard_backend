const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userProfile = new schema({
    about : {
        type : String,
        default : null
    },
   profilePic : {
       type : String,
       default : null
   },
    posts : [
    {type : schema.Types.ObjectId, ref : 'Post'}
    ],
    createdAt : {
        type : Date,
        default : Date.now
    }
});



module.exports = mongoose.model('UserProfile', userProfile);