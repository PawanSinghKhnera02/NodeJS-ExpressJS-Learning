const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL =
  "mongodb+srv://root:root@pawanlearning.hlcvopr.mongodb.net/?retryWrites=true&w=majority&appName=PawanLearning";

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      callback();
      _db = client.db("airbnb");
    })
    .catch((err) => {
      console.log("error while connecting to mongo: ", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Database not connected");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

// database.js
// const { MongoClient } = require("mongodb");

// const MONGO_URL = "mongodb+srv://root:root@pawanlearning.hlcvopr.mongodb.net/?retryWrites=true&w=majority&appName=PawanLearning";
// let _db;

// const mongoConnect = async () => {
//   try {
//     const client = await MongoClient.connect(MONGO_URL);
//     _db = client.db("airbnb");
//     console.log("MongoDB connected");
//   } catch (err) {
//     console.log("Error connecting to Mongo:", err);
//     throw err;
//   }
// };

// const getDB = () => {
//   if (!_db) {
//     throw new Error("Database not connected");
//   }
//   return _db;
// };

// module.exports = { mongoConnect, getDB };
