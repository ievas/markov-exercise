/** Command-line tool to generate Markov text. */
const markov = require("./markov");
let MarkovMachine = markov.MarkovMachine;

function cat(path){
    let fs = require('fs');
    fs.readFile(path, 'utf8', (err, dataRead) => {
        if(err){
        console.log(`Error reading ${path}\n`, err.message);
        } 
        let mM = new MarkovMachine(dataRead);
        console.log("... generated text from file 'eggs.txt' ...")
        mM.makeText();
    }) 
}

async function webCat(url){
    try{
        let axios = require('axios');
        let res = await axios.get(url);
        let mM = new MarkovMachine(res.data);
        console.log("... generated text from that URL ...")
        mM.makeText();
    }
    catch(err){
        console.log(`Error fetching ${url}/no-such-path:\n`, err.message);
    } 
}


let inputType = process.argv[2];

if(inputType === "file"){
    let path = process.argv[3];
    try {
        cat(path);
    }
    catch (err) {
        console.error(`Error reading ${path}\n`, err.message);
    }
} else {
    let url = process.argv[3];
    try {
        webCat(url);
    }
    catch (err){
        console.log(`Error fetching ${url}/no-such-path:\n`, err.message);
    }
    
}