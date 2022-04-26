const { MongoClient } = require("mongodb");

const client = new MongoClient(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.fqkqs.mongodb.net/shazamen?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
);

const songs_collection = client.db("shazamen").collection("songs");
const user_collection = client.db("shazamen").collection("users");

module.exports = {
    client,
    songs_collection,
    user_collection
}
client.connect().then(console.log());