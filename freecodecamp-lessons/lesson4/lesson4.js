var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
    fs.readFile(process.argv[2], (err, data) => {
        if (err) throw err;
    myNumber = data.toString().split('\n').length - 1;
    callback()
});
}

function logMyNumber() {
    console.log(myNumber)
}

addOne(logMyNumber)