const liked_collection = require("./database.js").liked_collection;
const axios = require("axios");

const addToLiked = async(req, res, next) => {
    if ((await liked_collection.findOne({ title: req.body.title })) == null) {
        const likedSong = {
            username: req.user.name,
            title: req.body.title,
            subtitle: req.body.subtitle,
            img: req.body.img,
            hrefUrl: req.body.hrefUrl,
            genre: req.body.genre,
        };

        liked_collection.insertOne(likedSong, (err, res) => {
            if (err) throw err;
            console.log(res);
        });
        res.send("Added");
    } else {
        res.status(400).send("alredy added");
    }
};

const getLikedSongs = async(req, res) => {
    liked_collection
        .find({ username: req.user.name })
        .toArray(function(err, results) {
            if (err) throw err;
            res.send({...results });
        });
};

const removeSong = async(req, res, next) => {
    if ((await liked_collection.findOne({ title: req.body.title })) != null) {
        await liked_collection.deleteOne({
            username: req.user.name,
            title: req.body.title,
        });
        res.send("oke");
    } else {
        res.status(400).send("doesnt exist");
    }
};
module.exports = {
    addToLiked,
    getLikedSongs,
    removeSong,
};