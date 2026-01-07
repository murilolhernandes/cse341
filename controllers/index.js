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

module.exports = baseController;