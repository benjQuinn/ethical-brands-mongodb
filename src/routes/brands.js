const express = require("express");
const brandsController = require("../controllers/brands");

const router = express.Router();

// GET
router.get("/", brandsController.get_all_brands);

// POST

// PATCH

// DELETE

module.exports = router;
