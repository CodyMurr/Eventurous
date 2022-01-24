const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');

router.get('/venues/index', venuesCtrl.index);

router.get('/venues/new', venuesCtrl.new);

router.post('/venues/index', venuesCtrl.create);

module.exports = router;