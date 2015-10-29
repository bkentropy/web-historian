var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
var headers = helpers.headers

// require more modules/folders here!

// 



// var actions = {
//   GET: function(req, res){
//     console.log('get function');
//     helpers.serveAssets(res, req.url);
//     helpers.sendResponse(statusCode, headers, res, optional);
//   }

// }

// res.writeHead(statuscode, header)
// res.end( doesn't NEED to take anything ) 

exports.handleRequest = function (req, res) {

  // var reqType = req.method
  // if ( actions[reqType] ) {
  //   actions[reqType](req, res);
  // } 
  if (req.method === "GET" && req.url === '/') {
    console.log("Worked..")
  } 
  else {
    console.log("Error!");
  }


  // if req.method === "POST"

  res.end(archive.paths.list);
};
