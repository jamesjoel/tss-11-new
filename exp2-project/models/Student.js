require("../config/db");
const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    fullname : String,
    fee : Number,
    contact : String,
    class : Number,
    address : String,
    gender : String
})

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;