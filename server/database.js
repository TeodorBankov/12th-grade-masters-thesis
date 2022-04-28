const { MongoClient } = require("mongodb");

const client = new MongoClient(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.fqkqs.mongodb.net/shazamen?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
);
const liked_collection = client.db("shazamen").collection("liked-songs");
const user_collection = client.db("shazamen").collection("users");

module.exports = {
    client,
    user_collection,
    liked_collection
}
client.connect().then(console.log());