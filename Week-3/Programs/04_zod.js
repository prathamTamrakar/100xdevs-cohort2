// what is zod 
// zod is a library for schema validation in JavaScript. It is a TypeScript-first schema declaration and validation library. 

const express = require('express');
const zod = require('zod');
const app = express();

const schema = zod.array(zod.number());
app.use(express.json());

// {
//     email: string => email
//     password: atleast 8 letters
//     country: "IN" "US"
// }

const userSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.post('/health-checkup', function (req, res) {
    // kidneys = [1,2] - type in body of postman and use POST method
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)

    // res.send({
    //     response
    // })
    // OR
    if (!response.success) {
        res.status(411).json({
            message: 'Bad Input!'
        });
    } else {
        res.send({
            response
        });
    }
})

app.listen(3000, () => {
    console.log("Server is running on the port 3000");
})