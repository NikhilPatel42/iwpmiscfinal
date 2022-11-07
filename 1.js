const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // create and start listening
    res.statusCode = 200;
    // set response status code 200 success
    // set response content type, html

    const routeMap = {
        '': 'index.html',
        'home': 'home.html',
        'about': 'about.html',
        'services': 'index.html',
        'jobseeker': 'jobseeker.html',
        'jobseeker/setup': 'jobseeker.setup.html',
        'employer': 'employer.html',
        'form': 'form.html',
        'formresult': '/routes/form.js'
    }  // route map object

    render(res, routeMap[req.url.slice(1)]);
    // response
});

function render(res, req) {
        fs.stat(`./${req}`, (err, stats) => {
            res.statusCode = 200;
            // set response code = 200
            res.setHeader('Content-Type', 'text/html');
            //

            if (stats) {
                fs.createReadStream(req).pipe(res);
            } else {
                // invalide file
                res.statusCode = 404;
                res.end('404 ');
                res.end('Sorry, page not found');
            }
        });
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

