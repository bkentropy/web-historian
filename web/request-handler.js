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
  // going to be requesting a URL
    var parts = urlParser.parse( req.url );
    var urlPath = parts.pathname 
    // should call collectData
    helpers.collectData(req, function(data) {
    // is the URL in the site list
      archive.isUrlInList(urlPath, function(truthy) {
        if ( truthy ) {
          // is the URL archived?
          console.log(urlPath + "***********")
          archive.isUrlArchived(urlPath, function(truthy) {
            // if so serve it
            if ( truthy ) {
              helpers.serveAssets(res, urlPath)            
            } else {
              // if not send to loading page
              helpers.sendToLoading(res);
            }
          })
        } else {
        // add it to the list
          archive.addUrlToList(urlPath, function() {
            // send them to loading page
            helpers.sendToLoading(res);
          });
        }
      });
    })
  }
};

        // archive.readListOfUrls(function(){

        // })

exports.handleRequest = function (req, res) {
  var action = actions[req.method];
  if ( action ) {
    action(req, res)
  } else {
    helpers.sendResponse(response, "Not Found", 404)
  }
};
