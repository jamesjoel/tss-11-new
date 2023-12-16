require("../config/db")
const mongoose = require("mongoose");

module.exports = mongoose.model("student", mongoose.Schema({
    name : String,
    age : Number,
    gender : String,
    class : String
}))