const express = require('express');

const indexController = require('../controllers');

const routes = express.Router();


routes.get('/', indexController.index);

module.exports = routes;