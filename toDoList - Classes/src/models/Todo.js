const { V4: uuidV4 } = require('uuid')

class Todo {
    constructor(title, description, deadLine) {
        this.id = 0,
        this.title = title,
        this.description = description,
        this.done = false,
        this.deadLine = new Date(deadLine),
        this.created_at = new Date()
    }
}

module.exports = Todo