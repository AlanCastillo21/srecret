const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentsSchema = new Schema({
   correo: {type:String, required: true, unique: true},  
   comment: String,
   idPost: String,
   user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}) 
module.exports = mongoose.model('Comments', CommentsSchema)