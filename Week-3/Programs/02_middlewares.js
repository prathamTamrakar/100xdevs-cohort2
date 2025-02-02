const express = require("express")
const app = express()

function userMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password
    if (username != "Pratham" && password != "123456") {
        res.status(403).json({
            message: "User doesn't exist"
        })
    } else {
        next()
    }
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            message: "Wrong inputs"
        })
    } else {
        next();
    }
}

app.get('/health-checkup',userMiddleware,kidneyMiddleware, (req, res) => {
    // do something with kidneyID

    res.send("Your hearth is healthy")
})

app.get('/heart-checkup',userMiddleware,(req,res)=>{
    // do something

    res.send("your heart is healthy")
})

app.listen(3000, () => {
    console.log("Server is running on the port 3000");

})