var http = require('http');
var portNo = 8080;

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('Whats up! Node.js here. How are you doing?<br />');
	
	var currentDateTime = new Date();
	res.end(currentDateTime.toString());
}).listen(portNo);

console.log("Server is listening on port #" + portNo + "...");
