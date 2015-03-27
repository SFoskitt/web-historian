var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  // res.end(archive.paths.list);

switch(req.method){
  case 'GET':
    res.writeHead(200, defaultCorsHeaders);
    res.end('Hello, World!');
  break;
  
  case 'POST':
  break;
}

};

var defaultCorsHeaders = {
  "Content-Type":"text/html",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
};