var path = require('path');
var archive = require('../helpers/archive-helpers');
// var httpHelpers = require('')
var fs = require('fs');
var nodestatic = require('node-static');

// require more modules/folders here!
var publicFolder = archive.paths.siteAssets;
var nstatic = new nodestatic.Server(publicFolder);

exports.handleRequest = function (req, res) {
  // res.end(archive.paths.list);
  // var home = archive.paths.siteAssets + '/index.html';

switch(req.method){
  case 'GET':
    // httpHelpers.serveAssets(res, home, function(){

    // } )
    // res.writeHead(200, defaultCorsHeaders);
    // res.end(html);
    nstatic.serve(req, res); 

  break;
  
  case 'POST':
    console.log(req);
    res.end();
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

