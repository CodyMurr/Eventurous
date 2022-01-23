const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');

router.get('/categories/index', categoriesCtrl.index);

module.exports = router;
