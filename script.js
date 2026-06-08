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

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
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
}).listen(process.env.PORT || 3000);
