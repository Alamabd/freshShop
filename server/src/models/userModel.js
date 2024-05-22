const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: String
})

const userModel = mongoose.model('user', userSchema)
module.exports = userModel