const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    content: String,
    Venue: [{
        type: Schema.Types.ObjectId,
        ref: "Venue"
    }],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
});

module.exports = mongoose.model('Post', postSchema);