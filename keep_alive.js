const http = require('http');
http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Bot is alive!');
}).listen(3000, () => {
console.log('Server is running on port 3000');
});