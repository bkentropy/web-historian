var fs = require('fs');
var path = require('path');
var http = require('http-request');
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
  // read file (file, callback)
  fs.readFile(exports.paths.list, function(error, sites) {

    sites = sites.toString().split('\n')
    if(callback){
      callback(sites)
    }


    // if ( error ) {
    //   console.log("Error!");
    // } else {
    //   var listArray = exports.path.list.split('\n')
    //   // if no errors, run the callback func
    //   callback(listArray)
    // }

  })
};


exports.isUrlInList = function(url, callback){
  exports.readListOfUrls(function(sites){
    //what is i?
    var found = _.any(sites, function(site, i){
      //what is match?
      return site.match(url)
    })

    callback(found)
  })

};
  // var list = exports.readListOfUrls(function() {
  //   var result = _.contains(list, siteQuery);
  // });
  // return result;

/*if(isUrlinList){ 
  //display page
} else{
  if(addUrlToList(siteQuery))
    // then loading page (do they re-Query or do WE change loading page?)
    // isU
  
}
*/
exports.addUrlToList = function(siteQuery, callback){
  // maybe a callback to show a success
  fs.appendFile(exports.paths.list, siteQuery)

  // exports.downloadUrls();

};

// AND to archive
exports.downloadUrls = function(urlArray){
  for ( var i = 0; i < urlArray.length; i++ ) {
    console.log("outside  " + urlArray[i])
    http.get({
      url: function(urlArray){urlArray[i]}
    },
      function(url) {
        url = urlArray[i];
       console.log("inside " + urlArray[i])
        var body = "";
        url.on("data", function(chunk){
          body += chunk;
        });
        url.on("end", function(){
          fs.writeFile(paths.archivedSites + urlArray[i], body, function(err){
            if ( err ) {
              console.log("ERROR in downloadUrls")
            } 
          });
        });
      }
    )
  }


};


exports.isUrlArchived = function(urlPath, callback){
  fs.exists(urlPath, function(exists){
    callback(exists);
  })
};



