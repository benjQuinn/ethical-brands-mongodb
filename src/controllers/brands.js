const { getDb } = require("../../services/db");

// GET
// get all brands controller
exports.get_all_brands = async (req, res) => {
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
};

// get brands by category controller?
// get brands by id controller?

// POST
// post brand controller?

// PATCH
// update brand by id controller?

// DELETE
// delete all brands
// delete brand by id
