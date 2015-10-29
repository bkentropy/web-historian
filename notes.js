We will call isUrlArchived first

isURLArchived(url, callback){
  //fs.readFile(archviedSits+url, function(error, data){
  //if(error) callback(false)
  //} else callback(true))
}




downloadURLS()

//
//
exports.addUrlToList = function(siteQuery){
//fs.write will overwrite what we have, we should use 
//fs.append
//fs.appendFile('message.txt', 'data to append', function (err) {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

  fs.write(exports.paths.list, siteQuery)

  exports.downloadUrls();

//fs.write(fd, buffer, offset, length[, position], callback)#
// Write buffer to the file specified by fd.

// offset and length determine the part of the buffer to be written.
//INSTEAD fs.appendFile(filename, data[, options], callback)
};

// AND to archive
exports.downloadUrls = function(){

  //this is going to get called once a minute by our helper cron
  //why not feed it an array of the "addUrlToList" if "isUrlArchived" returns false
  //then call exports.addUrlToList(array)
  //
  for (var i = 0; i < array.length; i++){
    http.get({
      url:array[i]}, 
      function(data){
        var body = ''
        data.on('data', function(chunck{body+= chunk})
          data.on('end', function(){
            fs.writeFile(archivedSites+url, body, function(error){
              if(error){
                console.log('error')}
  })}))})
  }
  http.get({
  url: siteQuery,
  progress: function (current, total) {
    console.log('downloaded %d bytes from %d', current, total);
  }//what is get.bin? Part of their internal API?
}, 'get.bin', function (err, res) {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log(res.code, res.headers, res.file);


// Send response = function(resource, data, statusCode){
// resource.writeHead(statusCode, headers)
// resource.end(data)
// }

//use in downloadURLs
// collectData = function(request, callback){
//request.on('data', function(chunk){
//body += chunk;})
//request.on('end', function(){
//callback (body)}) 
//}
//
serveAssets = function(res, asset, callback)
//sendResponse()
//assuming asset is the url

fs.readFile(siteAssets + asset, function())
if(asset ==='/index.html')
  fs.readFile(siteAssets + asset, function(error, optional){
    if (error) {
      fs.readFile(archivedSites + asset, function(error, optional){
        if (error) {
          exports.sendResponse(res, "File not found", 404);
        }else{
          exports.sendResponse(res, optional, 200);
}});
      found site
    }else{
      exports.sendResponse(200, res, optional);
}})};
//
//
//
//var ACTIONS ={
//GET: function(request, resource, callback?){
//helpers.serveAssets(resource, request.url)},
//
//POST: function(request, resource){
//helpers.collectData(request, function(url){
//archive.isUrlInList(url, function(result){
//if(result){nothing
//}else})} )}
//}