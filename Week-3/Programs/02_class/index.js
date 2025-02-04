const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
const jwtPassword = "123456"
app.use(express.json())
const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userexist(username,password){
    // write logic to return true if user exist in ALL_USERS array
    // hard-todo - try to use find function in js
    // const userExist = false;
    for(let i=0;i<ALL_USERS.length;i++){
        
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            return true;
        }
    }
    // console.log(userExist);
    
    return false
}

app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password);
    
    if(!userexist(username,password)){
        return res.status(403).send("Invalid username or password");
    }

    let token = jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    })
})

app.get('/users',(req,res)=>{
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        // return a list of all users other than this username
        res.json(ALL_USERS.filter(user => user.username !== username));
    }catch(err){
        return res.status(403).json({
            message: "Invalid token",
        })
    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})