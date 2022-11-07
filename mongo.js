const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://mongoadmin:secret@localhost:27888/?authSource=admin";

// Create a new MongoClient
const client = new MongoClient(uri);

//function URLParms2JSON(query) {}

async function run(query) {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");

    // Establish and verify connection

    const database = client.db("sampleData");
    const coll = database.coll("jobs");

    params = new URLSearchParams(query);
    flag = 0;
    mongoQuery = '';
    params.forEach((value, key) => {
        if(flag != 0) mongoQuery += ',';
        console.log(key, value);
        if(isNaN(`${value}`)) value = `"${value}"`;
        mongoQuery += `{ "${key}": ${value} }`;
        flag = 1;
    });

    condition = 'and';
    pre = `{ "$${condition}": [ `;
    post = ']}';
    mongoQuery = pre + mongoQuery + post;
    mongoQueryJSON = JSON.parse(mongoQuery);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = run(query).catch(console.dir);
