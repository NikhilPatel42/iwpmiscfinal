const http = require("http");
const mongo = require{"./mongo.js"};

const PORT = 8000;

const getFormData()

    if (req.url === "/mongo" && req.method === "GET") {
        // get the todos.
        const todos = await new Todo().getTodos();
        // set the status code, and content-type
        res.writeHead(200, { "Content-Type": "application/json" });
        // send the data
        res.end(JSON.stringify(todos));
    }

