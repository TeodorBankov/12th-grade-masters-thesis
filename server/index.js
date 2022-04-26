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

const auth = require('./authentication')
const client = new MongoClient(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.fqkqs.mongodb.net/shazamen?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
);

const songs_collection = client.db("shazamen").collection("songs");
const user_collection = client.db("shazamen").collection("users");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
// app.use(json())
app.use(express.static(join(__dirname, "..", "server", "dist")));

//verobse mode
app.use("*", (req, res, done) => {
    console.log(`${req.method} ${req.path} ${req.ip}`);
    done();
});

app.get("/show-response", async(req, res) => {
    res.send(JSON.stringify(await songs_collection.find().toArray()));
});

let recognize = async(_req, res) => {
    // spawn new child process to call the python script
    console.log("Pipe data from python script ...");
    let data = JSON.parse(
        runScriptSync(`music-recognition.py`, `asd.aac`)
        .output.toString()
        .split(/[\r\n]/)[0]
        .slice(1)
    );
    // console.log(data);

    try {
        //send trimmed data to mongo
        // songs_collection.insertOne(data);
        res.json(data);
    } catch (e) {
        console.error(e);
    }
};

app.get("/recognize-song", recognize);

app.get("/testTokenVerify", authenticateToken, (req, res) => {
    res.send(req.user.name)
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {

        if (err) return res.sendStatus(403)
        console.log(user)
        req.user = user

        next()
    })
}
app.get("/fetch-song", async(req, res) => {
    const station = req.query.url;
    console.log(req.query.url);
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

app.post("/login", auth.login)

app.post("/register", auth.register);


app.listen(port, () => {
    console.log("Listening on port " + port);
});

// client.connect().then(console.log());