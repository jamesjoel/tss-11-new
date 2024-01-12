require("../config/db");

const mongoose = require("mongoose");
const EmpSchema = mongoose.Schema({
    name : String,
    salary : Number,
    gender : String,
    address : String,
    city : String,
    createAt : { type : Date, default : new Date()}
})

module.exports = mongoose.model("employee", EmpSchema);

