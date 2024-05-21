const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

const server = http.createServer((req, res) => {
    console.log(`${req.method} | ${req.url} effettuata`);
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end("<h1>Hello Wold</h1>");

});

server.listen(port, host, () => {
    console.log(`Server Avviato su http:/${host}:${port}`);
});