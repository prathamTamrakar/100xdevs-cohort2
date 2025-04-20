"use strict";
// write a function to create a users table on the database
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
client.connect().then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(`Error: ${err}`);
});
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
function insert() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        INSERT INTO users (username,email,password) VALUES ('rajJaiswal','rajjaiswal@gmail.com','raj password')
    `);
        console.log(result);
    });
}
insert();
