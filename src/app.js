const express = require("express");

// init app & middleware
const app = express();

// routes
app.get("/brands", (req, res) => {
    res.json({ message: "Welcome to the API" })
})

module.exports = app;