const db = require("../../services/db");
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


// get brands by id controller?

// POST
// post brand controller?

// PATCH
// update brand by id controller?

exports.updateById = async (req, res) => {
  try {
    await db
    .collection ('brands')
    .doc(req.params.brandsId)
    .updated(req, body);
    res.send('Updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// DELETE
// delete all brands
exports.delete_all_brands = async (req, res) => {
  try {
    await db
    .collection ('brands')
    .doc(req.params.brandsId)
    .updated(req, body);
    res.send('Deleted successfully')
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// delete brand by id
exports.deleteById = async (req, res) => {
  try {
    await db
    .collection ('brands')
    .doc(req.params.brandsId)
    .updated(req, body);
    res.send('Deleted successfully')
  } catch (error) {
    res.status(400).send(error.message);
  }
};
