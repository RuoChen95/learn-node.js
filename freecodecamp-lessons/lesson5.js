var fs = require('fs');
var path = require("path");
var files = undefined;

function filterFile(callback) {
    fs.readdir(process.argv[2], (err, list) => {
        if (err) return err;
        for (files of list) {
            if (path.extname(files) == ("." + process.argv[3])) {
                callback()
            }
        }
    });
}

function logMyNumber() {
    console.log(files)
}

filterFile(logMyNumber)