const http = require("http");
const fs = require("fs");
const indexpage = fs.readFileSync("index.html");
const aboutpage = fs.readFileSync("about.html");
const contactpage = fs.readFileSync("contact.html");
const notfoundpage = fs.readFileSync("notfound.html");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end(aboutpage);
  } else if (req.url === "/contact") {
    res.end(contactpage);
  } else if (req.url === "/") {
    res.end(indexpage);
  } else {
    res.writeHead(404);
    res.end(notfoundpage);
  }
});

server.listen(3000);
