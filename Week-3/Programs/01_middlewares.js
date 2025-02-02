const express = require("express")
const app = express()

app.get('/health-checkup',(req,res)=>{
    const kidneyId = req.query.kidneyId
    const username = req.headers.username
    const password = req.headers.password

    if(username !="Pratham" && password !="123456"){
        res.status(403).json({
            message: "User doesn't exist"
        })
        return
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            message: "Wrong inputs"
        })
        return
    }
    // do something with kidneyID

    res.send("Your hearth is healthy")
})

app.listen(3000,()=>{
    console.log("Server is running on the port 3000");
    
})