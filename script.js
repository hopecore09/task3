const http = require('http');
const url = require('url');

function isNaturalNumber(value) {
    if (value === undefined || value === null || value === '') return false;
    if (!/^\d+$/.test(value)) return false;
    if (value.length > 15) return false;
    const num = parseInt(value, 10);
    return num > 0 && num <= Number.MAX_SAFE_INTEGER;
}

function gcd(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

const server = http.createServer((req, res) => {
    // Отключаем принудительный HTTPS
    res.setHeader('Strict-Transport-Security', 'max-age=0');
    
    const parsedUrl = url.parse(req.url, true);
    
    if (parsedUrl.pathname === '/rx9950x_gmail_com') {
        const { x, y } = parsedUrl.query;
        if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('NaN');
            return;
        }
        const result = (parseInt(x) * parseInt(y)) / gcd(parseInt(x), parseInt(y));
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(String(result));
        return;
    }
    
    res.writeHead(404);
    res.end('Not Found');
});

server.listen(process.env.PORT || 3000);
