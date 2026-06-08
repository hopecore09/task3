const http = require('http');
const url = require('url');

function isNaturalNumber(value) {
    if (!value) return false;
    const num = Number(value);
    return Number.isInteger(num) && num > 0 && String(num) === value;
}

function gcd(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    
    if (pathname === '/rx9950x_gmail_com') {
        if (!isNaturalNumber(query.x) || !isNaturalNumber(query.y)) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('NaN');
            return;
        }
        const x = Number(query.x), y = Number(query.y);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(String((x * y) / gcd(x, y)));
        return;
    }
    
    res.writeHead(404);
    res.end('Not Found');
}).listen(process.env.PORT || 3000);
