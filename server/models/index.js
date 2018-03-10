//============================================================
// connection to mongodb
const mongoose = require('mongoose');

module.exports.connect = (openUri) => {
  mongoose.connect(openUri);
    // plug in the promise library:
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./user');
};

//============================================================
// connection to mysql
const mysql = require("mysql");

module.exports.mysql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fachada'
  //testing right connetion with mysql
});

console.log('MY DATA BASE ONLINE');
