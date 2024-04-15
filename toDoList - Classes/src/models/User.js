const { v4: uuidV4 } = require('uuid')

class User {
    constructor(name, username) {
        this.id = uuidV4(),
        this.name = name,
        this.username = username,
        this.todo = []
    }
}

module.exports = User