const express = require("express");
const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const axios = require("axios");
const fs = require("fs");
const { spawn, exec } = require("child_process");
const { join } = require("path");
const { runScript, runScriptSync } = require('./lib');
const app = express();
const port = 3000;
const cors = require("cors");

const client = new MongoClient(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.fqkqs.mongodb.net/shazamen?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
);

const songs_collection = client.db("shazamen").collection("songs");

app.use(cors());
app.use(express.static(join(__dirname, "..", "server", "dist")));

//verobse mode 
app.use("*", (req, res, done) => {
    console.log(`${req.method} ${req.path} ${req.ip}`);
    done();
})

app.get("/show-response", async(req, res) => {
    res.send(JSON.stringify(await songs_collection.find().toArray()));
});

let recognize = async(_req, res) => {
    // spawn new child process to call the python script
    console.log("Pipe data from python script ...");
    let data = JSON.parse(runScriptSync(`music-recognition.py`, `asd.aac`).output.toString().split(/[\r\n]/)[0].slice(1));
    console.log(data);

    try {
        //send trimmed data to mongo
        // songs_collection.insertOne(data);
        res.json(data);
    } catch (e) {
        console.error(e);
    }
};

app.get("/recognize-song", recognize);

// https://www.radio-browser.info/

app.get("/fetch-song", async(req, res) => {
    const station = "http://tntradio.hostingradio.ru:8027/tntradio128.mp3";
    axios({
            method: "get",
            url: station,
            responseType: "stream",
        })
        .then((response) => {
            let stream = fs.createWriteStream("scripts/asd.aac");
            response.data.pipe(stream);

            setTimeout(() => {
                stream.close();
                recognize(req, res);
            }, 5000);
        })
        .catch(console.error);
});

app.get("/login", async(req, res) => {
    const user = req.query.user;
    const password = req.query.password;

    if (user == "teddy" && password == "test") {
        res.send("ok");
        return;
    }
    res.send("wrong credentials");
})

app.listen(port, () => {
    console.log("Listening on port " + port);
});

client.connect().then(console.log());