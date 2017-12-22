#!/usr/bin/env node

/* global process, __dirname */
/* eslint-disable no-process-exit */
/* eslint-disable no-console */

var fs = require("fs");
var path = require("path");
var vrep = require("./vrep");

var info = JSON.parse(fs.readFileSync(path.join(__dirname, "package.json")));

var args = process.argv;
var inputFile = args[2];
var dataFile = args[3];
var outputFile = args[4];

if (!inputFile || !dataFile) {
    printInfo();
    process.exit();
}

try {
    writeFile();
}
catch (error) {
    console.error(error && typeof error === "object" ? error.message : error);
}

function writeFile() {
    
    var input = "" + fs.readFileSync(path.join(process.cwd(), inputFile));
    var data = JSON.parse("" + fs.readFileSync(path.join(process.cwd(), dataFile)));
    var result = vrep.format(input, data);
    
    if (outputFile) {
        fs.writeFileSync(outputFile, result);
    }
    else {
        console.log(result);
    }
}

function printInfo() {
    console.log("");
    console.log(" vrep " + info.version);
    console.log(" ------------------------------");
    console.log("");
    console.log(" Replaces variables in a file with data from a JSON file.");
    console.log("");
    console.log(" Usage: vrep [input file] [data file] [output file]");
    console.log("");
    console.log(" The output file is optional; if not present, result is echoed.");
    console.log("");
}
