const express = require('express');
// const path = require('path');
const app = express();
// const bodyParser = require('body-parser');
// const indexRoutes = require('./routes/index');
// const connectDB = require('./db/connect');
// const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;

app.use('/', require('./routes'));

// connectDB();

// app.use(bodyParser.json());
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   next();
// })

// app.use(express.static(path.join(__dirname, 'views')));

// // app.use('/', indexRoutes);
// app.get('/', (req, res, next) => {
//   res.json('Awesome person');
// })

// app.set("view engine", "ejs");

// mongodb.initDb((err, mongodb) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });

app.listen(port, () => {
  console.log(`Web Server is listening at port ${port}`);
});
