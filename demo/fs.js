const fs = require('fs');   // file system
const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log("File created!");
// });

const filePath = path.join(__dirname, 'test', 'test.txt');

// fs.writeFile(filePath, 'Text nodeJS!', err => {
//     if (err) {
//         throw err;
//     }
//     console.log ("Text created!");
// })
//
// fs.appendFile(filePath, '\nNEW Text nodeJS!', err => {
//     if (err) {
//         throw err;
//     }
//     console.log ("NEW Text created!");
// })

fs.readFile(filePath, 'utf-8',(err, content) => {
    if(err) {
        throw err;
    }
    console.log("Content: \n" + content)
    // const data = Buffer.from(content)
    // console.log("Content: \n" + data.toString());
})