// global catches is a middleware that catches all the errors in the application

const express = require("express")
const app = express()

app.use(express.json()) // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.

app.post('/health-checkup', function (req, res){
    // kidneys = [1,2] - type in body of postman and use POST method
    const kidneys = req.body.kidneys
    const kidneyslength = kidneys.length

    res.send("You have "+kidneyslength+" kidneys")
})

// global catches
app.use(function(err,req,res,next){
    res.json({
        message: "Sorry something went wrong"
    })
    // res.status(500).send("Something went wrong")
})


app.listen(3000, () => {
    console.log("Server is running on the port 3000");
})