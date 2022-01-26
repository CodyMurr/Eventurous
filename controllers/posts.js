const Post = require('../models/post');

module.exports = {
    index,
    new: newPost,
    create,
    show,
    delete: deletePost,
    edit,
    update
};

function update(req, res) {
    Post.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
        req.body,
        {new: true},
        function(err, post) {
            if (err || !post) return res.redirect('/posts');
            res.redirect(`posts/${post._id}`);
        }
    );
}

function edit(req, res) {
    Post.findOne({_id: req.params.id, user: req.user._id}, 
        function(err) {
            if (err || !post) return res.redirect('/posts');
            res.render('posts/edit', { post });
    });
}

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