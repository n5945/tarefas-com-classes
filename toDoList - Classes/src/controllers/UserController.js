const User = require("../models/User")
const Users = require("../models/Users")
const {V4: uuidV4} = require("uuid")

const list = new Users()

class UserController {
    createUser(req, res){
        const {name, username} = req.body
        const user = new User()

        user.name = name
        user.username = username

        list.user.push(user)
        return res.status(201).json(user)
    }

    listUsers(req, res){
        return res.status(201).json(list)
    }
}

module.exports = UserController;