const { createServer } = require('node:http');
require('dotenv').config();
const url = require('url');
const fs = require('fs');
const port = process.env.PORT;

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
    return res.end(hello);
  });
});

server.listen(port, () => {
  console.log(`${process.env.EXAMPLE} Server running at http://localhost:${port}/`);
});
