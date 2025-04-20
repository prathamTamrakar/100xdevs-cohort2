const zod = require('zod')

/*
    {
        tittle: stirng,
        description: string
    }

    {
        id:string
    }

*/

const createTodo = zod.object({
    tittle: zod.string(),
    description :zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}