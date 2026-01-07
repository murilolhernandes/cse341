const express = require('express');
const router = express.Router();

const indexController = require("../controllers");

router.get('/', indexController.getAll);

router.get('/:id', indexController.getSingle);

module.exports = router;