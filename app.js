const express = require("express");
const cors = require("cors");
const connectMongo = require("./mongodb");
const { Logger } = require("mongodb");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/random", (req, res) => {
  const gameList = [
    "The Last of Us 2",
    "God of War",
    "Horizon Zero Dawn",
    "Spiderman",
    "GTA V",
    "Hollow Knight",
    "Super Smash Bros Ultimate",
    "Mario Kart 8",
    "Call of Duty",
  ];
  const salesList = [];
  for (var game in gameList) {
    var price = Math.round(Math.random() * 300 + 700); // [700,1000]

    var cost = Math.round(Math.random() * 300 + (price - 500)); // [price-500, price-200]

    var units = Math.round(Math.random() * 65) + 5;
    salesList.push({
      game: gameList[game],
      price,
      cost,
      units,
    });
  }
  res.send(salesList);
});

app.get("/data", async (req, res) => {
  const mongo = await connectMongo();
  const x = await mongo
    .db("game-sales-demo")
    .collection("games")
    .find({})
    .toArray();
  res.send(x);
});

module.exports = app;
