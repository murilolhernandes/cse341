const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
// const indexRoutes = require('./routes/index');

const port = process.env.PORT || 8080;
const app = express();

app.use('/', require('./routes'));

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
// app.use('/', indexRoutes);

// app.use(express.static(path.join(__dirname, 'views')));


// app.set("view engine", "ejs");

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

// app.listen(port, () => {
//   console.log(`Web Server is listening at port ${port}`);
// });