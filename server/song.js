const liked_collection = require("./database.js").liked_collection;
const axios = require("axios");

const addToLiked = async(req, res, next) => {
    const likedSong = {
        username: req.user.name,
        title: req.body.title,
        subtitle: req.body.subtitle,
        img: req.body.img,
        hrefUrl: req.body.hrefUrl,
        genre: req.body.genre
    };

    liked_collection.insertOne(likedSong, (err, res) => {
        if (err) throw err;
        console.log(res);
    });
    res.send("Added");
};

const getLikedSongs = async(req, res, next) => {
    // liked_collection.find(({ username: req.user.name }, function(err, songs) {
    //     res.send(songs)
    // }));
    liked_collection.find({ username: req.user.name }).toArray(function(err, results) {
        if (err) throw err;
        res.send({...results })
    });

}

const removeSong = async(req, res, next) => {
    await liked_collection.deleteOne({ username: req.user.name, title: req.body.title })
    res.send("oke")
}
module.exports = {
    addToLiked,
    getLikedSongs,
    removeSong
};