const http = require("http");
const fs = require("fs");
const path = require("path");

global.DEBUG = true;

const server = http.createServer((request, response) => {
  if (DEBUG) console.log("Request Url:", request.url);
  switch (request.url) {
    case "/":
      path += "index.html";
      myEmitter.emit("route", path);
      routes.indexPage(path, response);
      break;
    default:
      if (DEBUG) console.log("404 Not Found");
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404 Not Found");
      break;
  }
});
server.listen(3000, () => {
  console.log("Server is running...");
});
