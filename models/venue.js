const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryName: String
})

const eventSchema = new Schema({
    category: [categorySchema],
    familyFriendly: Boolean,
    scheduled: {
        type: Date,
        required: true
    }
});

const reviewSchema = newSchema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
});

const venueSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    events: [eventSchema]
});

module.exports = mongoose.model('Venue', venueSchema);