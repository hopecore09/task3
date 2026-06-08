const express = require('express');
const app = express();

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

function isNatural(num) {
    const n = parseInt(num);
    return !isNaN(n) && n > 0 && n.toString() === num.toString();
}

app.get('/rx9950x_gmail_com', (req, res) => {
    const { x, y } = req.query;
    
    if (isNatural(x) && isNatural(y)) {
        const a = parseInt(x);
        const b = parseInt(y);
        const lcm = (a * b) / gcd(a, b);
        res.type('text/plain').send(lcm.toString());
    } else {
        res.type('text/plain').send('NaN');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});