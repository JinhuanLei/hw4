var mongoClient = require('mongodb').MongoClient;
// var User = require('./userModel');
var users = require('./users');
var db;

// Initialize the database
mongoClient.connect("mongodb://localhost:27017/wordgame", function(err, client) {
    db = client.db('wordgame');
});


module.exports = { collection : (name) => db.collection(name) }
