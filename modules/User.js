const mongoose = require('mongoose')

//Schema of DB
const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const User = mongoose.model('User', usersSchema)
module.exports = User;