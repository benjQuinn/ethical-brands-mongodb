const express = require("express");
const brandsRoutes = require("./routes/brands");

const app = express();
app.use(express.json());

app.use("/brands", brandsRoutes);

module.exports = app;
