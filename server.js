const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

const title = process.env.TITLE;
console.log('Title:', title); // Debug

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
    res.writeHead(200, { "Content-Type": "text/html" });
    const randomQuote = getRandomQuote();
    res.end(`<h1>${title}</h1><p>${randomQuote}</p>`);
});

server.listen(port, host, () => {
    console.log(`Server Avviato su http://${host}:${port}`);
});
