let http = require('http');
let server = http.createServer((req, res) => {
    res.write('<h1 style="color: blue">Hello FSD!</h1>');
    res.end();
});

server.listen(3001, () => {
    console.log('I am awake!');
});
