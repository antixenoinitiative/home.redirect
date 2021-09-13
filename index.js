var http = require('http');
var fs = require('fs');
 
// create a http server
http.createServer(function (req, res) {
    if (req.url == '/wiki') {
        res.writeHead(301, { "Location": "http://wiki.antixenoinitiative.com" + req.url });
        return res.end();
    } else {
        res.writeHead(302, { "Location": "http://www.antixenoinitiative.com" + req.url });
        return res.end();
    }
}).listen(process.env.PORT);