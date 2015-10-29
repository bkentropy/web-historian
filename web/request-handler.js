var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var headers = helpers.headers


exports.handleRequest = function (req, res) {
var statusCode = 200


if ( req.method = "GET" ) {   
    //console.log(res.data);
    //helpers.serveAssets(res, req.url);
    helpers.sendResponse(statusCode, headers, res);
  }


  // res.end(archive.paths.list);
};
