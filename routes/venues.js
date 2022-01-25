const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');

router.get('/index', venuesCtrl.index);

module.exports = router;