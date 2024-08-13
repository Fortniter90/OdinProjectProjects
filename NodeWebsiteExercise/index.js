const { createServer } = require('node:http');
const url = require('url');
const fs = require('fs');
const port = 8080;

const server = createServer((req, res) => {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  if (q.pathname === "/") {
    filename = "./index.html";
  }
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
