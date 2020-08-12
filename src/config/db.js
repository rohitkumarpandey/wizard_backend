const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
require('../model/user/userAccount');

const { database_url} = require('./configuration');
mongoose.connect(database_url).then(()=>{
    console.log("Database connection established");
}, error=>{console.log("Failed to made connection to the database due to : ",error);
});