const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const { createTodo,updateTodo } = require('./types.js')
const { Todo } = require('./db.js')


app.use(express.json())
app.use(cors())

app.post('/todo',async (req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        return res.status(411).json({
            message: "You sent th wrong inputs"
        })
    }

    // put it in mongoDB

    await Todo.create({
        tittle: createPayload.tittle,
        description: createPayload.description,
    })

    res.json({
        message: "Todo Created"
    })
})

app.get('/todos',async(req,res)=>{
    const todos = await Todo.find({})
    res.json({
        todos
    })    
})

app.put('/completed',async(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        return res.status(411).json({
            message: "You sent the wrong inputs"
        })
    }

    await Todo.update({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        meassge: "Todo marked as completed"
    })
})

app.listen(3000,()=>{
    console.log("server is running on the port 3000");
})