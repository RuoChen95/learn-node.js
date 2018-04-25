var mymodule = require('./lesson6_module');

function filterFile(callback) {
    mymodule(process.argv[2], process.argv[3], callback);
}

filterFile(callback);

function callback (err, data) {
    if(err) return console.log(err);
    else console.log(data);
}