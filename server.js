const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

const title = process.env.TITLE;


const quotes = [
    "La vita è come andare in bicicletta. Per mantenere l'equilibrio devi muoverti.",
    "Non smettiamo di giocare perché invecchiamo; invecchiamo perché smettiamo di giocare.",
    "Il miglior modo per predire il futuro è inventarlo.",
    "La logica ti porterà da A a B. L'immaginazione ti porterà dappertutto.",
    "Il successo è la somma di piccoli sforzi, ripetuti giorno dopo giorno."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

const server = http.createServer((req, res) => {
    console.log(`${req.method} | ${req.url} effettuata`);
    if(req.url === '/favicon.ico'){
        res.writeHead(404);
        res.end();
        return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    const randomQuote = getRandomQuote();
    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>${title}</h1><p>${randomQuote}</p>
</body>
</html>`);
});

server.listen(port, host, () => {
    console.log(`Server Avviato su http://${host}:${port}`);
});
