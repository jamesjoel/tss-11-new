let mongoose = require("mongoose");
let StudentSchema = mongoose.Schema({
    fullname : String,
    class : Number,
    fee : Number,
    contact : String,
    gender : String,
    address : String
})

let Student = mongoose.model("student", StudentSchema);

module.exports = Student;