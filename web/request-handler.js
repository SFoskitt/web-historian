var path = require('path');
var archive = require('../helpers/archive-helpers');
// var httpHelpers = require('')
var fs = require('fs');
var nodestatic = require('node-static');
var url = require('url');

// require more modules/folders here!
var publicFolder = archive.paths.siteAssets;
var archivesFolder = archive.paths.archivedSites
var publicStatic = new nodestatic.Server(publicFolder);
var archivesStatic = new nodestatic.Server(archivesFolder); 


exports.handleRequest = function (req, res) {
   console.log("this is the request url " + req.url);
   console.log("method = " + req.method);
  // res.end(archive.paths.list);
  // var home = archive.paths.siteAssets + '/index.html';
var rawUrl = '';
switch(req.method){
  case 'GET':
    if(req.url === "/") {
      publicStatic.serve(req, res); 
      // archive.readListOfUrls();
    } else {
      archivesStatic.serve(req, res);
    }
  break;
  
  case 'POST':
    req.on('data', function(chunk){
      rawUrl += chunk;
      console.log(rawUrl.toString());
    });
    req.on('end', function(){
      var cleanUrl = JSON.parse(rawUrl);
      archive.addUrlToList(cleanUrl.url);
      res.writeHead(302, defaultCorsHeaders);
      res.end();
    });
  break;
  default:
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

