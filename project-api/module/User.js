require ('../config/db');

const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    address : String,
    contact : Number,
    gender :  String,
    state : String,
    city: String
})

module.exports=mongoose.model('user',UserSchema);