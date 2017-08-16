let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res) {
    fs.readFile('index.html', function(err, data) {
        if (err) {
            res.writeHead(500);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<!DOCTYPE html>' +
                '<html>' +
                '    <head>' +
                '        <meta charset="utf-8" />' +
                '        <title>Ma page Node.js !</title>' +
                '    </head>' +
                '    <body>' +
                '       <h1>Nom des chiens!</h1>' +
                '    </body>' +
                '</html>');
            res.end(data);
        }
    });
});

server.listen(8080);
console.log("Serveur web lancé sur localhost:8080 ...");