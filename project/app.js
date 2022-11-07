//app.js
const http = require("http");
const mongo = require("./mongo.js");
const url = require("node:url");

const PORT = 8000;

const server = http.createServer(async (req, res) => {}

    if (req.url.match(/\/search/^\?([\w-]+(=[\w-]*)?(&[\w-]+(=[\w-]*)?)*)?$/) && req.method === "GET") {
        try {
            const mongos = await new mongo();
            console.log("search");



            res.end(JSON.stringify());
        }
    }

);
