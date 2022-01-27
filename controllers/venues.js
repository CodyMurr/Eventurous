const Venue = require('../models/venue');
const axios = require('axios');
const FSQ_BASE_URL = "https://api.foursquare.com/v3/places/nearby?";
module.exports = {
    index,
};

async function index(req, res) {
    const {lat, lng} = req.query;
    let places = [];
    if (lat) {
        // call FSQ api
        const response = await axios.get(
            `${FSQ_BASE_URL}&ll=${lat},${lng}&limit=50&radius=100`,
            { headers: {Authorization: process.env.FSQ_TOKEN}}
        );
        console.log(response.data.results);
        places = response.data.results;
    }
    Venue.find({})
    .then(function(venues) {
        res.render('venues/index', { title: 'All Venues', venues, places });
    })
    .catch(function(err) {
        res.redirect('/');
    });
}