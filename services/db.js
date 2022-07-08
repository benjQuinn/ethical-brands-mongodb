require("dotenv").config();
const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToServer: async (cb) => {
    try {
      await MongoClient.connect(process.env.MONGODB_URI).then((client) => {
        dbConnection = client.db("ethical-brands");
        console.log("Successfully connected to MongoDB.");
        return cb();
      });
    } catch (error) {
      console.log(error);
      return cb(error);
    }
  },

  getDb: () => dbConnection,
};
