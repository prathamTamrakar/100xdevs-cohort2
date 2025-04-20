// write a function to create a users table on the database

import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://prathamtamrakar:npg_dQOxMhnN2aE3@ep-weathered-block-a12fcqj4-pooler.ap-southeast-1.aws.neon.tech/test?sslmode=require"
})

async function connectToDatabase() {
    try {
      await client.connect();
      console.log("Connected to database");
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
}

client.connect().then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log(`Error: ${err}`); 
})


async function createTable() {
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `)
}
// createTable()

// insert a new user into the database
async function insert(){
    const result = await client.query(`
        INSERT INTO users (username,email,password) VALUES ('rajJaiswal','rajjaiswal@gmail.com','raj password')
    `)
    console.log(result);
    // this is an insecure way to store data in your table
    //  when you expose this functionality eventually via http, someone can do SQL INJECTION to get access t0o your data/ dalete your data
}
insert()
