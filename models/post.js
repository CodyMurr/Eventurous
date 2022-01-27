const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const postSchema = new Schema({
    title: String,
    venue: String,
    location: {
        type: String,
    },
    link: String,
    comments: [commentSchema],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);