const express = require('express');

const indexController = require('../controllers');

const router = express.Router();


router.get('/', indexController.index);

// router.get('/users', require('./users'));

module.exports = router;