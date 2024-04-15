const User = require("../models/User")
const Users = require("../models/Users")

function checkExistsUserAccount(req, res, next){
    const{username} = req.headers;

    const user = new User()
    const list = new Users()

    const users = list.users.get()

    const existentUser = users.find(user => user.username === username)

    if (!existentUser) {
        return res.status(400).json("Usuário não encontrado") 
    }
    req.user = user
    next()
}
