const http = require('http');

function isNaturalNumber(value) {
    if (value === undefined || value === null || value === '') return false;
    if (!/^\d+$/.test(value)) return false;
    const num = parseInt(value, 10);
    return num > 0 && String(num) === value;
}

function gcd(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://${req.headers.host}`);
    const { x, y } = Object.fromEntries(myURL.searchParams);
    
    if (myURL.pathname === '/rx9950x_gmail_com') {
        if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('NaN');
            return;
        }
        const a = parseInt(x, 10);
        const b = parseInt(y, 10);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(String((a * b) / gcd(a, b)));
        return;
    }
    
    res.writeHead(404);
    res.end('Not Found');
}).listen(process.env.PORT || 3000);
