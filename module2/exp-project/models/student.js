require("../config/db");
const mongoose =require("mongoose");

const studentSchema = mongoose.Schema({
    fullname : String,
    email : String,
    class : Number,
    city : String,
    contact : String,
    gender : String

})
const student = mongoose.model("student",studentSchema);

module.exports= student;
