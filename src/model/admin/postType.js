const mongoose = require('mongoose');
const schema = mongoose.Schema;

const postType = new schema({
    category : [{type : String}]
});

module.exports = mongoose.model('PostType', postType);