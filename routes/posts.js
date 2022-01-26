var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');
var isLoggedIn = require('../config/auth');

// All routes start with "/posts"

// GET /posts (display all posts)
router.get('/', postsCtrl.index);
// GET /posts/new (display a form for entering a new post)
router.get('/new', isLoggedIn, postsCtrl.new);
// GET /posts/:id (display a "detail/show" page for a single post)
router.get('/:id', postsCtrl.show);
// POST /posts (handle the new form being submitted)
router.post('/', isLoggedIn, postsCtrl.create);
// DELETE /posts/:id
router.delete('/:id', isLoggedIn, postsCtrl.delete);

module.exports = router;

