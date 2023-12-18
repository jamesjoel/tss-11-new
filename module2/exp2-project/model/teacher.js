require("../config/db")
let mongoose =require("mongoose");

let TeacherSchema = mongoose.Schema({
    fullname : String,
    fess : Number,
    class : Number,
    contact : String,
    gender : String,
    addresh : String,
}) 

let Teacher = mongoose.model("teacher", TeacherSchema);

module.exports =Teacher;
  