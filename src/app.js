const express = require("express");
const db = require("../services/db");
const { getDb } = require("../services/db")

const app = express();
app.use(express.json())

app.get("/brands", async (req, res) => {
  const db = await getDb("ethical-brands");
  let brands = [];

  try {
    await db
      .collection("brands")
      .find()
      .forEach((brand) => brands.push(brand));
    res.status(200).json(brands);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = app;
