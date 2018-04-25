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

// 以下是官方给出的参考答案
// var fs = require('fs')
// var path = require('path')
//
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
//
// fs.readdir(folder, function (err, files) {
//     if (err) return console.error(err)
//     files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//             console.log(file)
//         }
//     })
// })