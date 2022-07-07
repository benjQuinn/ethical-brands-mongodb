require("dotenv").config();
const { MongoClient } = require("mongodb")


const { DB_PASSWORD, DB_USER } = process.env;

const DATABASE_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@ethical-brands.68io3nd.mongodb.net/?retryWrites=true&w=majority`

let dbConnection;

exports.connectToDb = async (cb) => {
    try {
        await MongoClient.connect(DATABASE_URI).then((client) => {
            dbConnection = client.db();
            return cb();
        })
    } catch(error) {
        console.log(error);
        return cb(error);
    };
}

exports.getDb = () => dbConnection;
