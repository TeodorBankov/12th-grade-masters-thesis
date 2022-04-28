require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { join } = require("path");

const auth = require('./authentication');
const song = require('./song');
const recognition = require('./recognize');

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(join(__dirname, "..", "server", "dist")));

app.post("/addToLiked", auth.authenticateToken, song.addToLiked)

app.get("/getLikedSongs", auth.authenticateToken, song.getLikedSongs)

app.delete("/deleteSong", auth.authenticateToken, song.removeSong)

app.get("/fetch-song", recognition.fetch_song_stream_and_recognize)

// user
app.post("/login", auth.login)

app.post("/register", auth.register);

app.get("/userInfo", auth.authenticateToken, auth.getUserInfo)

app.put("/updatePassword", auth.authenticateToken, auth.updatePassword)

// end user
app.listen(port, () => {
    console.log("Listening on port " + port);
});