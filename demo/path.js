const path = require('path');

console.log("Filename: " + path.basename(__filename));

console.log("Name of directory: " + path.dirname(__filename));

console.log("File's extend: " + path.extname(__filename));

console.log("Parse: " + path.parse(__filename).name);

console.log(path.join(__dirname,'server','index.html'));