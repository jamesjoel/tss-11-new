// 1. connection
require("../config/db");
let mongoose = require("mongoose");


// 2. make schema
let StudentSchema = mongoose.Schema({
    fullname : String,
    class : Number,
    fee : Number,
    contact : String,
    gender : String,
    address : String
})


// 3. make model
let Student = mongoose.model("student", StudentSchema);

module.exports = Student;