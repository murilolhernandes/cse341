const express = require('express');
const routes = express.Router();
const indexController = require('../controllers')

// routes.get('/', indexController.index);
// routes.get('/', indexController.getData);


routes.get('/', indexController.awesomeFunction);
routes.get('/awesome', indexController.returnAnotherPerson);

module.exports = routes;