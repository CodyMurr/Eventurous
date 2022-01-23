const Category = require('../models/category');
const Post = require('../models/post');

module.exports = {
    index,
    new: newCategory, 
    create
};

function create(req, res) {
    const category = new Category(req.body);
    category.save(function(err) {
        if (err) console.log(err);
        console.log(category);
        res.redirect('/categories/index');
    });
}

function newCategory(req, res) {
    res.render('categories/new', { title: 'Add Category' });
}

function index(req, res) {
    Category.find({})
    .then(function(categories) {
        res.render('categories/index', { title: 'All Categories', categories });
    })
    .catch(function(err) {
        res.redirect('/categories');
    });
}