var http=require('http');
var fs=require('fs');
var url=require('url');

var onCreateServer=function(request, response){
 var pathname=url.parse(request.url).pathname;
 var onReadFile=function(err, data){
     if(err){
        console.log(err);
        response.writeHead(404,{'Content-Type':'text/html'})
     }
     else{
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);

     }
     response.end();

 }
 fs.readFile(pathname.substr(1),onReadFile);
};

var server=http.createServer(onCreateServer);
server.listen(8000);
console.log("server is running on http://127.0.0.1:8000");