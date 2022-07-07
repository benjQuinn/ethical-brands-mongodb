require("dotenv").config();
const app = require("./src/app");
const { connectToDb, getDb } = require("./services/db");

let db;

const APP_PORT = process.env.PORT || 4000;

connectToDb((error) => {
    if (!error) {
        app.listen(APP_PORT, () => {
            console.log("App is listening on port 3000")
        });
        db = getDb();
    }
})

module.exports = db;
