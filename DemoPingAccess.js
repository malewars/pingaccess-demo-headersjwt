// Node.js program to demonstrate the
// request.headers Method

// Importing http module
const http = require('http');
var url = require("url");

var MYJWT='';
// Request and response handler
const http2Handlers = (request, response) => {
	// Getting request/response header
	// by using request.headers method
const value = request.headers;
	console.log(request.url);
  if (request.url == '/index.html' || request.url == '/') {
	response.end();
      } else {
	// Display header
	myheaders = JSON.stringify(request.headers);
	response.setHeader('Content-Type', 'application/json');
        response.write("My Headers Received :");
        response.write(myheaders);
        parsemyheaders=JSON.parse(myheaders);
        response.write("My JWT Received :");
	MYJWT = parsemyheaders["myjwt"];
	response.write(MYJWT);
        var base64Payload = MYJWT.split(".")[1];
        var payloadBuffer = Buffer.from(base64Payload, "base64");
        var parseJWT = JSON.parse(payloadBuffer);
	// Optional Console Logging
	console.log(value.host)
	console.log(JSON.stringify(request.headers));
        console.log(parseJWT);
	// Display result
	response.end(JSON.stringify(parseJWT), 'utf8', () => {
		console.log("displaying the result...");

		httpServer.close(() => {
			console.log("server is closed")
		})
	});
};
}
// Creating http Server
const httpServer = http.createServer(
	http2Handlers).listen(8484, () => {
		console.log("Server is running at port 8484...");
	});
