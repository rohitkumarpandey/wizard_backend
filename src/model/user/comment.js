const mongoose = require('mongoose');
const schema = mongoose.Schema;

const comment = new schema({
    userid : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    userAbout : {
        type : String,
        required : true
    },
    commentDesc : {
        type : String,
        required : true
    },
    commentedAt : {
        type : Date,
        default : Date.now
    },
    lastUpdatedAt : {
        type :  Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Comment', comment);