const { body, validationResult } = require('express-validator');

const contactValidation = () => {
  return [
    body('firstName')
      .trim()
      .notEmpty().withMessage('First name is required')
      .isString().withMessage('First name must be a string'),
    body('lastName')
      .trim()
      .notEmpty().withMessage('Last name is required')
      .isString().withMessage('Last name must be a string'),
    body('email')
      .trim()
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Please provide a valid email address'),
    body('favoriteColor')
      .trim()
      .notEmpty().withMessage('Favorite color is required')
      .isString().withMessage('Favorite color must be a string'),
    body('birthday')
      .trim()
      .notEmpty().withMessage('Birthday is required')
      .isString().withMessage('Birthday must be a string')
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().forEach(err => extractedErrors.push({ [err.path || err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  contactValidation,
  validate
};