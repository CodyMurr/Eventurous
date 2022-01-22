var express = require('express');
var router = express.Router();
var postsCtrl = require('../controllers/posts');
var isLoggedIn = require('../config/auth');

// All routes start with "/movies"

// GET /movies (display all movies)
router.get('/', postsCtrl.index);
// GET /movies/new (display a form for entering a new movie)
router.get('/new', isLoggedIn, postsCtrl.new);
// GET /movies/:id (display a "detail/show" page for a single movie)
router.get('/:id', postsCtrl.show);
// POST /movies (handle the new form being submitted)
router.post('/', isLoggedIn, postsCtrl.create);

module.exports = router;

