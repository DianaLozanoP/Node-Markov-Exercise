const fs = require('fs');
const process = require('process');
const axios = require('axios');
const URL = require('url').URL;

const { MarkovMachine } = require("./markov");

const stringIsAValidUrl = (s) => {
    try {
        new URL(s);
        return true;
    } catch (err) {
        return false;
    }
};

function determinePath() {
    let path = process.argv.pop();
    if (stringIsAValidUrl(path)) {
        webCat(path);
    }
    else {
        cat(path);
    }
};

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log("Error:", err)
            process.kill(1)
        }
        let mm = new MarkovMachine(data);
        console.log(mm.makeText(numWords = 10)
            , `...generated text from  file ${path} `)

    })
};

function webCat(url) {
    axios.get(url)
        .then(function (res) {
            let mm = new MarkovMachine(res.data);
            console.log(mm.makeText(numWords = 10), '...generated text from that URL');
        })
};

determinePath();
