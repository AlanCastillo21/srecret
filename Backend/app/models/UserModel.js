const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    correo: {type:String, required: true},  
    Pasword: String,
    
})
module.exports = mongoose.model('User', UserSchema)