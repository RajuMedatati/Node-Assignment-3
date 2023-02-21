const fs = require("fs");
const http = require("http");
const server = http.createServer((req, resp) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      resp.writeHead(500, { 'Content-Type': 'text/plain' });
      resp.end(err.message);
      return;
    }
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.end(data);
  });
});
server.listen(5000, () => {
  console.log("Backend app is running on 5000");
});