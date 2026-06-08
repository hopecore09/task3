const http = require('http');

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
    const myURL = new URL(req.url, `http://${req.headers.host}`);
    const pathname = myURL.pathname;
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
        return;
    }
    
    if (pathname === '/rx9950x_gmail_com') {
        const x = myURL.searchParams.get('x');
        const y = myURL.searchParams.get('y');
        
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

server.listen(5000, '0.0.0.0', () => {
    console.log('LCM server running on port 5000');
});
