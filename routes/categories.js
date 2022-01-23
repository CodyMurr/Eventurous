const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');

router.get('/categories/index', categoriesCtrl.index);

router.get('/categories/new', categoriesCtrl.new);

router.post('/categories/index', categoriesCtrl.create);

module.exports = router;
