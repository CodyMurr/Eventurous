const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    venue: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
});

module.exports = mongoose.model('Post', postSchema);