const mongodb = require('../db/connect');
const path = require('path');
const ObjectId = require('mongodb').ObjectId;

const baseController = {}

baseController.index = (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
};

baseController.getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('user').find();
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  });
};

baseController.getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('user').find({ _id: userId });
  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users[0]);
  });
};

module.exports = baseController;