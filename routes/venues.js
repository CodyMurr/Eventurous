const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');

router.get('/venues/index', venuesCtrl.index);

module.exports = router;