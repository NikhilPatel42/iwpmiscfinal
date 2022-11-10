const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://mongoadmin:secret@localhost:27888/?authSource=admin";

// Create a new MongoClient
const client = new MongoClient(uri);

//function URLParms2JSON(query) {}

class Mongo {
    
    async run(query) {
      try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");

        // Establish and verify connection

        const database = client.db("sampleData");
        const coll = database.collection("jobs");

        par = new URLSearchParams(query);
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

        const cursor = coll.find(mongoQueryJSON);

        console.log(cursor);
        return cursor;

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
}

new Mongo().run(`job_salary=91293&job_skills=HLR&job_field=python`);


