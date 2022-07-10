const express = require("express");
const brandsController = require("../controllers/brands");

const router = express.Router();

// GET
router.get("/", brandsController.get_all_brands);
router.get("/category/:category", brandsController.get_brands_by_category);
router.get("/name/:name", brandsController.get_brand_by_name);
// POST

// PATCH
router.patch("/brandsId", brandsController.updateById);
// DELETE
router.delete("/brandsId", brandsController.delete_all_brands);
router.delete("/brandsId", brandsController.deleteById);

module.exports = router;
