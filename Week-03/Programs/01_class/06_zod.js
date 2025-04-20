const zod = require('zod');
const express = require('express');
const app = express();

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6),
    })
    const response = schema.safeParse(obj);
    console.log(response);
};

app.post('/login', function(req, res){
    const response = validateInput(req.body);
    if(!response.success){
        res.json({
            message: 'Your Input is Invalid!'
        })
            return;
    }
});

app.listen(3000);

// console.log(express.json()); // Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
