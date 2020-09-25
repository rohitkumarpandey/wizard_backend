const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userAccount = new schema({
    emailid : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required : true
    },
  
    accesibility : {
        type : Boolean,
        default : true
    },
    noOfReports : [{
        type : String,
        default : null
    }],
    createdAt : {
        type : Date,
        default : Date.now
    }
});


module.exports = mongoose.model('UserAccount', userAccount);