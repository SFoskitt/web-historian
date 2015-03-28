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
  // res.end(archive.paths.list);
  // var home = archive.paths.siteAssets + '/index.html';
var rawUrl = '';
switch(req.method){
  case 'GET':
    publicStatic.serve(req, res); 
  break;
  
  case 'POST':
    var newUrl = url.parse(req.url);
    // console.log("req = " + req.url);
    // console.log('request URL is: ' + req.url);
    req.on('data', function(chunk){
      rawUrl += chunk;
    });
    req.on('end', function(){
      var cleanUrl = rawUrl.slice(4);
      // fs.readFile(archivesFolder + '/' + cleanUrl, function(err, data){
      // if (err) throw err;
      // console.log(data);
      // res.writeHead(200, defaultCorsHeaders);
      // // res.write(data);
      res.end();
    })
      // console.log(cleanUrl);
      // archive.readListOfUrls();
      //TODO
      //if isUrlInList
        //if true fetch HTML and serve it up
      // else 
       // addUrlToList
       // get copy of html page.
      // archivesStatic.serve(req, res); 
    // });
    // res.end();
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

