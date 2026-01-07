const mongodb = require('../db/connect');

const baseController = {}

// baseController.index = (req, res) => {
//   res.render('index')};

// baseController.index = (req, res) => {
//   res.sendFile(path.join(__dirname, 'views', 'index.html'));
// };

baseController.index = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

baseController.awesomeFunction = ((req, res, next) => {
  res.json('Awesome person');
});

baseController.returnAnotherPerson = ((req, res, next) => {
  res.json('Super awesome person');
});

module.exports = baseController;