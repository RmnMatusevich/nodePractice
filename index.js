const chalk = require('chalk');

const fs = require('fs');

const path = require('path');




const http  = require('http');

// http.createServer((req, res) => {
//    res.end('Hello server');
// });

const server = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "text/html"});

    console.log(req.url);

    // if (req.url ==='/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         res.writeHead(200, {"Content-Type": "text/html"});
    //         res.end(data);
    //
    //     });
    // }else if (req.url ==='/contacts') {
    //     fs.readFile(path.join(__dirname, 'public', 'contacts.html'), (err, data) => {
    //         if (err) {
    //             throw err;
    //         }
    //         res.writeHead(200, {"Content-Type": "text/html"});
    //         res.end(data);
    //
    //     });
    // }

    // res.end('<h1>Hello server!!!</h1>');

    let filePath = path.join(__dirname, 'public', req.url ==='/'? 'index.html' : req.url);

    console.log(filePath);
    res.end();
});

server.listen(3000, () =>
   console.log('Starting server')
);