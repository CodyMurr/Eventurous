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
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    post.save(function(err) {
        if (err) console.log(err);
        res.redirect(`/posts/${post._id}`);
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