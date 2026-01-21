const express = require('express');
const { contactValidation, validate } = require('../utilities/validation');
const router = express.Router();

const indexController = require("../controllers");

router.get('/', indexController.getAll);

router.get('/:id', indexController.getSingle);

router.post('/', 
  contactValidation(),
  validate, 
  indexController.addContact);

router.put('/:id', 
  contactValidation(),
  validate, 
  indexController.updateContact);

router.delete('/:id', indexController.deleteContact);

module.exports = router;