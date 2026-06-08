const http = require('http');

function isNaturalNumber(value) {
    if (value === undefined || value === null || value === '') return false;
    if (!/^\d+$/.test(value)) return false;
    if (value === '0') return false;
    return true;
}

function gcd(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}

http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://${req.headers.host}`);
    const x = myURL.searchParams.get('x');
    const y = myURL.searchParams.get('y');
    
    if (myURL.pathname === '/rx9950x_gmail_com') {
        if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('NaN');
            return;
        }
        
        const a = BigInt(x);
        const b = BigInt(y);
        const result = (a * b) / gcdBigInt(a, b);
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(String(result));
        return;
    }
    
    res.writeHead(404);
    res.end('Not Found');
}).listen(process.env.PORT || 3000);

function gcdBigInt(a, b) {
    while (b) { [a, b] = [b, a % b]; }
    return a;
}
