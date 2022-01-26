const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    show,
    delete: deletePost
};

function deletePost(req, res) {
    Post.findOneAndDelete(
        {_id: req.params.id, user: req.user._id},
        function(err) {
            res.redirect('/posts');
        }
    );
}

function show(req, res) {
    Post.findById(req.params.id)
    .then(function(post) {
        res.render('posts/show', { title: 'Post Detail', post });
    })
}

function create(req, res) {
    const post = new Post(req.body);
    post.user = req.user._id;
    post.userName = req.user.name;
    post.userAvatar = req.user.avatar;
    post.save()
    .then(function(post) {
        res.redirect(`/posts/${req.params.id}`);
    });
}

function newPost(req, res) {
    res.render('posts/new', { title: 'Post an Event' });
}

async function index(req, res) {
    Post.find({})
    .then(function(posts) {
      res.render('posts/index', { title: 'All Posts', posts });
    });
}