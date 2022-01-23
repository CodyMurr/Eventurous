const Post = require('../models/post');

module.exports = {
    create,
    delete: deleteComment
};

function deleteComment(req, res) {
    Post.findOne({'comments._id': req.params.id, 'comments.user': req.user._id})
    .then(function(post) {
        if (!post) res.redirect('/posts');
        post.comments.remove(req.params.id);
        return post.save();
    }) 
    .then(function(post) {
        res.redirect(`/posts/${post._id}`);
    });
}

function create(req, res) {
    Post.findById(req.params.id)
    .then(function(post) {  
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        post.comments.push(req.body);
        return post.save();
    })
    .then(function(post) {
        res.redirect(`/posts/${post._id}`);
    });
}

