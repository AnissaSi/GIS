"use strict";

var http = require('http');


callback = function(response) {
  var str = '';


  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();
const http = require("http");
const host = 'localhost';
const port = 3000;
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Server erreichbar");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
