const Venue = require('../models/venue');

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

function index(req, res) {
    Venue.find({})
    .then(function(venues) {
        res.render('venues/index', { title: 'All Venues', venues });
    })
    .catch(function(err) {
        res.redirect('/');
    });
}