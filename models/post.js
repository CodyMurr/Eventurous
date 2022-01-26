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
    venue: { type: Schema.Types.ObjectId, ref: 'Venue' },
    location: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);