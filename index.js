require("dotenv").config();
const { connectToServer, getDb } = require("./services/db");
const app = require("./src/app");

let db;

connectToServer((error) => {
  if (!error) {
    app.listen(3000, () => {
      console.log("App is listening on port 3000");
    });
  }
  db = getDb();
});

module.exports = db;
