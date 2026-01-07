// const mongodb = require('mongodb').MongoClient;

// const URI = "mongodb+srv://muriloluizhernandes_db_user:NGBxPIvDZpT8pte6@wdd341.h7bxm68.mongodb.net/?appName=WDD341";

// const connectDB = async () => {
//   await mongodb.connect(URI);
//   console.log('db connected...');
// };

// module.exports = connectDB;

// const dotenv = require('dotenv');
// dotenv.config();
// const MongoClient = require('mongodb').MongoClient;

// let _db;

// const initDb = (callback) => {
//   if (_db) {
//     console.log('Db is already initialized!');
//     return callback(null, _db);
//   }
//   MongoClient.connect(process.env.MONGODB_URI)
//     .then((client) => {
//       _db = client;
//       callback(null, _db);
//     })
//     .catch((err) => {
//       callback(err);
//     });
// };

// const getDb = () => {
//   if (!_db) {
//     throw Error('Db not initialized');
//   }
//   return _db;
// };

// module.exports = {
//   initDb,
//   getDb,
// };