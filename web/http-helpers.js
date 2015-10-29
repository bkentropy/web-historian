var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.sendResponse = function(res, obj, status) {
  status = status || 200;
  res.writeHead(status, headers);
  res.end(obj)
}


exports.serveAssets = function(res, asset, callback) {
  console.log("insdie of serveAssets")
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  
  // if ( asset === "/index.html" || asset === "/" ) {
  //   var foundFile = fs.readFile(archive.paths.siteAssets + "/index.html", function(err, optional) {
  //     if ( err ) {
  //       console.log("ERROR SERVER ASSETS");
  //     }
  //   });
  // exports.sendResponse(statusCode, headers, res, foundFile);
  // } 
  var encoding = {encoding: 'utf8'};

  fs.readFile(archive.paths.siteAssets + asset, encoding, function(err, data) {
    if ( err ) {
      fs.readFile(archive.paths.archivedSites + asset, encoding, function(err, data) {
        if ( err ) {
          if ( callback ) {
            callback();
          } else {
            // exports.send404(res);
            exports.sendResponse(res, "Not found in readfile", 404);
          }
        } else {
          exports.sendResponse(res, data);
        }
      });
    } else {
      exports.sendResponse(res, data);
    }
  })
  
};


exports.collectData = function(request, callback){
  var data = "";
  request.on("data", function(chunk){
    data += chunk;
  });

  request.on("end", function(){
    callback(data);
  });
}
