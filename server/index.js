require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const axios = require("axios");
const fs = require("fs");
const { spawn, exec } = require("child_process");
const { join } = require("path");
const { runScript, runScriptSync } = require("./lib");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;
const cors = require("cors");

const auth = require('./authentication');
const song = require('./song');
const recognition = require('./recognize');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static(join(__dirname, "..", "server", "dist")));

app.post("/addToLiked", auth.authenticateToken, song.addToLiked)

app.get("/getLikedSongs", auth.authenticateToken, song.getLikedSongs)

app.delete("/deleteSong", auth.authenticateToken, song.removeSong)

app.get("/fetch-song", recognition.fetch_song_stream_and_recognize)
    // app.get("/fetch-song", async(req, res) => {

//     const station = req.query.url;
//     axios({
//             method: "get",
//             url: station,
//             responseType: "stream",
//         })
//         .then((response) => {
//             // let stream = fs.createWriteStream("scripts/asd.aac");
//             let stream = fs.createWriteStream(`scripts/${req.query.userId}.aac`)
//             response.data.pipe(stream);

//             setTimeout(() => {
//                 stream.close();
//                 recognize(req, res);
//             }, 5000);
//         })
//         .catch(console.error);
// });
let recognize = async(_req, res) => {
    // spawn new child process to call the python script
    console.log("Pipe data from python script ...");
    let data = JSON.parse(
        runScriptSync(`music-recognition.py`, `${_req.query.userId}.aac`)
        .output.toString()
        .split(/[\r\n]/)[0] // regex splits response every new line 
        .slice(1) // removes leftover bracket after split (conversion to normal json)
    );
    try {
        fs.unlinkSync(`scripts/${_req.query.userId}.aac`);
        res.json(data);
    } catch (e) {
        console.error("Error in recognize");
    }
};
// user
app.post("/login", auth.login)

app.post("/register", auth.register);

app.get("/userInfo", auth.authenticateToken, auth.getUserInfo)

app.put("/updatePassword", auth.authenticateToken, auth.updatePassword)

// end user
app.listen(port, () => {
    console.log("Listening on port " + port);
});