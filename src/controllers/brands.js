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

// get brands by category controller
exports.get_brands_by_category = async (req, res) => {
  const db = await getDb("ethical-brands");
  const category = await db.collection("brands").find({ category: req.params.category }).toArray();
  let brands = [];

  if (category.length > 0) { 
  // if the category inputted by the user is correct, return the brands in that category
    try {
    await db
      .collection("brands")
      .find({ category: req.params.category })
      .forEach((brand) => brands.push(brand));
    res.status(200).json(brands);
    } catch (error) {
      console.log(error).json({ message: "Could not fetch documents." })
    }
  } else {
    res.status(404).json({ error: "Invalid category - try clothing, beverage, food, cosmetics or technology."})
  }
}

// get brand by name
exports.get_brand_by_name = async (req, res) => {
  const db = await getDb("ethical-brands");
  const brand = await db.collection("brands").findOne({ name: req.body.name })

  if (brand) {
    try {
      await db
        .collection("brands")
        .findOne({ name: /req.body.name/i })
        .then((brand) => {
          res.status(200).json(brand)
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Could not fetch document. "})
    }
  } else {
    res.status(404).json({ message: "Invalid search item. Please enter a valid brand in the request body. "})
  }
}

// get brands by id controller?

// POST
// post brand controller?

// PATCH
// update brand by id controller?

// DELETE
// delete all brands
// delete brand by id
