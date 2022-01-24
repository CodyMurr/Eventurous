const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const venueSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    locality: {
        type: String,
        required: true
    } 
}, {
    timestamps: true
});

module.exports = mongoose.model('Venue', venueSchema);