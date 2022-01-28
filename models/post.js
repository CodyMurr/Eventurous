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
    location: String,
    date: {
        type: Date,
        default: function() {
            return new Date().toLocaleDateString();
        }
    },
    link: String,
    comments: [commentSchema],
    category: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);