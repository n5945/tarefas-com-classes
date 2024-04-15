const Todo = require("../models/Todo");
const User = require('../models/User');

class TodoController {
    createTodo(req, res) {
        const {title, description, deadLine} = req.body

        const todo = new Todo()
        const user = new User()

        todo.title = title
        todo.description = description
        todo.deadLine = deadLine

        user.todo.push(todo)
        return res.status(201).json("Tarefa criada com sucesso!")
    }

    listTodo(req, res) {}

    updateTodo(req, res) {}

    updateStatus(req, res){}

    deleteTodo(req, res){}
}

module.exports = TodoController;