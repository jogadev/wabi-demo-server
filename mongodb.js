const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/game-sales-demo";

let client;

module.exports = async () => {
  // this gives you client
  // Mongoclient.connect returns promise if no callback is passed
  try {
    client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log("Connected");
    return client;
  } catch (e) {
    console.log("Could not connect to mongodb");
  }
};

module.exports.getConnection = () => client;

module.exports.closeConnection = () => client.close();
