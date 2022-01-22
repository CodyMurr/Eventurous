const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    show
};

function show(req, res) {
    Post.findById(req.params.id);
    res.render('posts/show');
}

function newPost(req, res) {
    res.render('posts/new', { title: 'Post an Event' });
}

function index(req, res) {
    Post.find({})
    .then(function(posts) {
      res.render('posts/index', { title: 'All Posts', posts });
    });
}