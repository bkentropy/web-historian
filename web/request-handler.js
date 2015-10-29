var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var headers = helpers.headers;
var urlParser = require('url');

var actions = {
  'GET': function(req, res){

    var parts = urlParser.parse( req.url );
    var urlPath = parts.pathname === '/' ? '/index.html' : parts.pathname;
    helpers.serveAssets(res, urlPath);
  }, 

  'POST': function(req, res){
    var parts = urlParser.parse( req.url );
    // going to be requesting a URL

    // is the URL in the site list
    archive.readListOfUrls(function(){})
      // is the URL archived?
        // if so serve it
        // if not send to loading page
    // add it to the list
    // send them to loading page
  }
};


exports.handleRequest = function (req, res) {
  var action = actions[req.method];
  if ( action ) {
    action(req, res)
  } else {
    helpers.sendResponse(response, "Not Found", 404)
  }
};
