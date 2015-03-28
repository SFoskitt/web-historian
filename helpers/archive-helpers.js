var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  // var content = [];
  console.log("file is " + exports.paths.list);
  fs.readFile(exports.paths.list, function(err, data){
    if (err) throw err;
    // debugger;
    var strData = data.toString();
    var strArr = strData.split('\n');
    console.log( "data = " + strArr); 
    callback(strArr);
  })
  // return content;
};

exports.isUrlInList = function(target, callback){
  exports.readListOfUrls(function(strArray){
    for(var i = 0; i < strArray.length; i++){
      if(target === strArray[i]){
        callback(true);
      } else {
        callback(false);
      }
    }
  });
};

exports.addUrlToList = function(data){
  data = data + "\n";
  fs.appendFile(exports.paths.list, data, function(err){
    if(err){
      console.log(err);
      throw err;
    }
  });
};

exports.isUrlArchived = function(){
};

exports.downloadUrls = function(){
};
