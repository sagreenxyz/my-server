// https://digitalskills.instructure.com/courses/3775/pages/start-your-server-6-dot-2-2?module_item_id=464446

let http = require('http');
let server = http.createServer((req, res) => {
    res.writeHeader(206);
    res.write('<h1>Bark!</h1><img src="https://httpstatusdogs.com/img/206.jpg" alt="206">');
    res.end();
});

server.listen(3001, () => {
    console.log('I am awake!');
});
