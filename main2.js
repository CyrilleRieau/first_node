const database = require('./database2.js');
database.getAllDoggos(function(chiens) { console.log(chiens); });
const http = require('http');
const serveur = http.createServer(function(request, response) {
    database.getAllDoggos(function(chiens) {
        response.end(JSON.stringify(chiens));
    });
});
serveur.listen(8080, function() { console.log('server listening on port 8080') });