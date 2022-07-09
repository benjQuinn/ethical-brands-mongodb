const express = require("express");
const brandsRoutes = require("./routes/brands");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/brands", brandsRoutes);

module.exports = app;
