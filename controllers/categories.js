const Category = require('../models/category');
const Post = require('../models/post');

module.exports = {
    index
};

function index(req, res) {
    Category.find({})
    .then(function(categories) {
        res.render('categories/index', { title: 'All Categories', categories });
    })
    .catch(function(err) {
        res.redirect('/categories');
    });
}