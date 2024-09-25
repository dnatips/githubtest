var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('Whats up! Node.js here. How are you doing?<br />');
	
	var currentDateTime = new Date();
	res.end(currentDateTime.toString());
}).listen(8080);
