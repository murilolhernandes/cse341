const mongodb = require('../db/connect');
const path = require('path');
const ObjectId = require('mongodb').ObjectId;

const baseController = {}

// baseController.index = (req, res) => {
//   res.sendFile(path.join(__dirname, '../views', 'index.html'));
// };

baseController.index = (req, res) => {
  res.send("Hello World");
};

baseController.getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
};

baseController.getSingle = async (req, res, next) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: contactId });
  result.toArray().then((contact) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact[0]);
  });
};

module.exports = baseController;