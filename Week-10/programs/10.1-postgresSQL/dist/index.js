"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://prathamtamrakar:npg_dQOxMhnN2aE3@ep-weathered-block-a12fcqj4-pooler.ap-southeast-1.aws.neon.tech/test?sslmode=require"
});
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected to database");
        }
        catch (error) {
            console.error("Error connecting to database:", error);
        }
    });
}
// client.connect().then(() => {
//     console.log('connected');
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })
// write a function to create a users table on the database
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
    `);
    });
}
// createTable()
// insert a new user into the database
function insert() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        INSERT INTO users (username,email,password) VALUES ('rajJaiswal','rajjaiswal@gmail.com','raj password')
    `);
        console.log(result);
        // this is an insecure way to store data in your table
        //  when you expose this functionality eventually via http, someone can do SQL INJECTION to get access t0o your data/ dalete your data
    });
}
// insert()
// other way of writing
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://prathamtamrakar:npg_dQOxMhnN2aE3@ep-weathered-block-a12fcqj4-pooler.ap-southeast-1.aws.neon.tech/test?sslmode=require"
        });
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO users (username,email,password) VALUES ('prathamTamrakar','prathamtamrakar@gmail.com','pratham password')";
            const res = yield client.query(insertQuery);
            console.log("insertion success", res);
            // this is an insecure way to store data in your table
            //  when you expose this functionality eventually via http, someone can do SQL INJECTION to get access t0o your data/ dalete your data
        }
        catch (error) {
            console.error(error);
        }
        finally {
            yield client.end();
        }
    });
}
function insertUser(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertQuery = " INSERT INTO users (username,email,password) VALUES ($1,$2,$3)";
        const values = [username, email, password];
        const result = yield client.query(insertQuery, values);
        console.log(result);
    });
}
// insertUser('prathamSharma','prathamsharma@gmail.com','pratham@123')
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertQuery = "SELECT * from users WHERE email = $1";
        const values = [email];
        const result = yield client.query(insertQuery, values);
        if (result.rows.length > 0) {
            console.log('User Found', result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log('No user found with the given email');
            return null;
        }
    });
}
// get all users from the database
function getAllUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      SELECT * FROM users
    `);
            console.log("Users:", result.rows);
        }
        catch (error) {
            console.error("Error getting users:", error);
        }
    });
}
// Delete a user in the database
function deleteUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      DELETE FROM users
      WHERE email = $1
      RETURNING *
    `, [email]);
            console.log("User deleted:", result.rows[0]);
        }
        catch (error) {
            console.error("Error deleting user:", error);
        }
    });
}
connectToDatabase()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield insertUser("anshu2", "anshu2@gmail.com", "12345"); // You can add more users here by calling this function multiple times with different values
    // await insertUser('prathamSharma','prathamsharma@gmail.com','pratham@123')
    // await getUser('anshu2@gmail.com')
    // await getAllUser()
    // await deleteUser('anshu2@gmail.com')
    // await deleteUser('prathamsharma@gmail.com')
}))
    .catch((error) => {
    console.error("Error connecting to database:", error);
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield client.end();
}));
