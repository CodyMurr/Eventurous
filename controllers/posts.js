const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    show
};

function show(req, res) {
    Post.findById(req.params.id);
    res.render('posts/show');
}

function create(req, res) {
    const post = new Post(req.body);
    post.save(function(err) {
        if (err) return res.redirect('/posts/new');
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