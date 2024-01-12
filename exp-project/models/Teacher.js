require("../config/db");
let mongoose = require("mongoose"); 
let TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    education : String,
    address : String,
    gender : String,
    contact : String
})

let Teacher = mongoose.model("teacher", TeacherSchema);
module.exports = Teacher;