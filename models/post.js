const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    category: [categorySchema],
    familyFriendly: Boolean,
    scheduled: {
        type: Date,
        required: true
    }
});


const postSchema = new Schema({
    title: String,
    venue: {
        type: Schema.Types.ObjectId,
        ref: "Venue"
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