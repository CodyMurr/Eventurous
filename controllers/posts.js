const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    show
};

function show(req, res) {
    Post.findById(req.params.id)
    .then(function(post) {
        res.render('posts/show', { title: 'Post Detail', post });
    })
}

function create(req, res) {
    const post = new Post(req.body);
    post.save(function(err) {
        if (err) console.log(err);
        console.log(post);
        res.redirect('/posts');
    });
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