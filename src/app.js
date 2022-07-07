const express = require("express");

const app = express();

// routes
app.get("/brands", (req, res) => {
    res.json({ message: "API Connected" })
})

module.exports = app;