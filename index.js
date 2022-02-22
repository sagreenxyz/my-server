let http = require('http');
let server = http.createServer((req, res) => {
    res.write('Hello FSD!');
    res.end();
});

server.listen(3001, () => {
    console.log('I am awake!');
});
