//app.js
const http = require("http");
const Mongo = require("./mongo.js");
const url = require("node:url");

const PORT = 8000;

const server = http.createServer(async (req, res) => {

    if (req.url.match('\/search/^\?([\w-]+(=[\w-]*)?(&[\w-]+(=[\w-]*)?)*)?$') && req.method === "GET") {
        try {
            
            query = req.url.split('/');
            query = query[2];
            const mongos = await new Mongo().run(query);
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(mongos));

        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

});

