const express = require("express");
const axios = require("axios");
const fs = require("fs");
const { spawn } = require("child_process");
const { join } = require("path");
const JSON5 = require("json5");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.static(join(__dirname, "../Front End/masters-thesis/dist")));

let recognize = (req, res) => {
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn("python3", [join(__dirname, "./scripts/music-recognition.py"), "asd.aac"]);
    // collect data from script
    python.stderr.on("data", (data) => {
        console.log(data.toString());
    });
    python.stdout.on("data", function (data) {
        console.log("Pipe data from python script ...");
        // dataToSend = data.toString();
        data = data.toString().split("False").join("false").trim();
        // console.log(data);
        try {
            let json = JSON5.parse(data);
            console.log(json);
            res.json(json);
        } catch (e) {
            // console.error(e);
        }
    });
};

app.get("/recognize-song", recognize);

//https://www.radio-browser.info/

app.get("/fetch-song", async (req, res) => {
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

app.listen(port, () => {
    console.log("Listening on port " + port);
});
