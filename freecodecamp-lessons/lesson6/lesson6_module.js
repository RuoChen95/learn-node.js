var path = require("path");
var fs = require('fs');

function filter (fileList, fileName, callback) {
	fs.readdir(fileList, (err, list) => {
		if (err) {
			return callback(err);
		} else {
			var files = undefined;
			for (files of list) {
				if (path.extname(files) == ("." + fileName)) {
					callback(null, files);
				}
			}
		}
	});
};

module.exports = filter