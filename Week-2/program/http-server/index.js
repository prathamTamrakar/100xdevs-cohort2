const express = require('express');
const PORT = 8000;
const app = express()
const bodyParser = require('body-parser');
// create a todo app that lets users store todos on the server
// try to create a http server from scratch in c 
// create a http server in rust using actix-web
// create ahttp server in golang using gurrila framework
// spring boot java

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    console.log(req.body); // without body-parser it is undefined 
    // {}
    res.send('hello world'); 
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})