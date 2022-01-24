const Venue = require('../models/venue');
const axios = require('axios');
const FSQ_BASE_URL = "https://api.foursquare.com/v3/places/nearby?";

module.exports = {
    index,
    new: newVenue,
    create
};

function create(req, res) {
    const venue = new Venue(req.body);
    venue.save(function(err) {
        if (err) console.log(err);
        console.log(venue);
        res.redirect('/venues/index');
    });
}

function newVenue(req, res) {
    res.render('venues/new', { title: 'Add Venue' });   
}

async function index(req, res) {
    const {lat, lng} = req.query;
    let places = [];
    if (lat) {
        // call FSQ api
        const response = await axios.get(
            `${FSQ_BASE_URL}ll=${lat},${lng}`,
           { headers: {Authorization: process.env.FSQ_TOKEN}}
        );
        console.log(response.data.results[0]);
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