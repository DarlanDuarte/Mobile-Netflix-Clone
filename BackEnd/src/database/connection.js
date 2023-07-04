const mongoose = require("mongoose");

const MONGO_DB_URL = "mongodb://127.0.0.1:27017/Irmão-velho";
const DB_NAME = "crud-mongodb";

const connection = mongoose.createConnection(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
