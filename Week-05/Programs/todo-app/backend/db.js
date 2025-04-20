const mongoose = require('mongoose')
const {MONGO_URL} = require ('./constant.js')

mongoose.connect(MONGO_URL)

const todoSchema = new mongoose.Schema({
    tittle:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        default: false
    }
})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = {
    Todo
}