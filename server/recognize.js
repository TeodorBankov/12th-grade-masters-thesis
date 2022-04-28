const axios = require("axios");
const fs = require("fs");
const { runScript, runScriptSync } = require("./lib");

const fetch_song_stream_and_recognize = async(req, res) => {

    const station = req.query.url;
    axios({
            method: "get",
            url: station,
            responseType: "stream",
        })
        .then((response) => {
            // let stream = fs.createWriteStream("scripts/asd.aac");
            let stream = fs.createWriteStream(`scripts/${req.query.userId}.aac`)
            response.data.pipe(stream);

            setTimeout(() => {
                stream.close();
                recognize_song(req, res);
            }, 5000);
        })
        .catch(console.error);
}

const recognize_song = async(_req, res) => {
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

module.exports = {
    fetch_song_stream_and_recognize
};