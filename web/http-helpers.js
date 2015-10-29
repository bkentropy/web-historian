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

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  if ( asset === "/index.html" || asset === "/" ) {
    var foundFile = fs.readFile(archive.paths.siteAssets + "/index.html", function(err, optional) {
      if ( err ) {
        console.log("ERROR SERVER ASSETS");
      }
    });
  exports.sendResponse(statusCode, headers, res, foundFile);
  } 
};

exports.sendResponse = function(statusCode, headers, res, optional) {
  statusCode = statusCode || 200;
  optional = optional || "Hello World!"
  
  res.writeHead(statusCode, headers);
  res.end(optional)
}


// collectData

// how we actually serve the web pages
  // serveWebPages
    // they hit submit with some URL, and we need to check if it is archived
    // if there is a page that hasn't been cached yet -> loading page
  // or 404, if url is incorrect 






