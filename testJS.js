var http = require("http");
//http server
http
  .createServer(function (request, response) {
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("refactored code again and again 3\n");
  })
  .listen(8081);

// Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
