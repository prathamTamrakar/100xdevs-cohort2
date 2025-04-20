
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

// client.connect().then(() => {
//     console.log('connected');
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// write a function to create a users table on the database
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
async function insert() {
    const result = await client.query(`
        INSERT INTO users (username,email,password) VALUES ('rajJaiswal','rajjaiswal@gmail.com','raj password')
    `)
    console.log(result);
    // this is an insecure way to store data in your table
    //  when you expose this functionality eventually via http, someone can do SQL INJECTION to get access t0o your data/ dalete your data
}
// insert()

// other way of writing
async function insertData() {
    const client = new Client({
        connectionString: "postgresql://prathamtamrakar:npg_dQOxMhnN2aE3@ep-weathered-block-a12fcqj4-pooler.ap-southeast-1.aws.neon.tech/test?sslmode=require"
    })
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username,email,password) VALUES ('prathamTamrakar','prathamtamrakar@gmail.com','pratham password')"
        const res = await client.query(insertQuery)
        console.log("insertion success", res);
        // this is an insecure way to store data in your table
        //  when you expose this functionality eventually via http, someone can do SQL INJECTION to get access t0o your data/ dalete your data

    } catch (error) {
        console.error(error);
    } finally {
        await client.end()
    }
}

async function insertUser(username: string,email:string,password:string){
    const insertQuery = " INSERT INTO users (username,email,password) VALUES ($1,$2,$3)"
    const values = [username,email,password]
    const result  = await client.query(insertQuery,values);
    console.log(result);
}

// insertUser('prathamSharma','prathamsharma@gmail.com','pratham@123')

async function getUser(email:string){
    const insertQuery = "SELECT * from users WHERE email = $1"
    const values = [email]
    const result = await client.query(insertQuery,values);

    if(result.rows.length > 0){
        console.log('User Found',result.rows[0]);
        return result.rows[0]
    } else {
        console.log('No user found with the given email');
        return null
    }
}

// get all users from the database
async function getAllUser() {
  try {
    const result = await client.query(`
      SELECT * FROM users
    `);

    console.log("Users:", result.rows);
  } catch (error) {
    console.error("Error getting users:", error);
  }
}

// Delete a user in the database
async function deleteUser(email: string) {
  try {
    const result = await client.query(`
      DELETE FROM users
      WHERE email = $1
      RETURNING *
    `, [email]);

    console.log("User deleted:", result.rows[0]);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}

connectToDatabase()
  .then(async () => {
    await insertUser("anshu2", "anshu2@gmail.com", "12345")    // You can add more users here by calling this function multiple times with different values

    // await insertUser('prathamSharma','prathamsharma@gmail.com','pratham@123')

    // await getUser('anshu2@gmail.com')
    // await getAllUser()
    // await deleteUser('anshu2@gmail.com')
    // await deleteUser('prathamsharma@gmail.com')

  }) 
  .catch((error) => {
    console.error("Error connecting to database:", error);
  }).finally(async() => { 
    await client.end();
  })