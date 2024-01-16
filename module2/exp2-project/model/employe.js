require("../config/db");

let mongoose = require("mongoose");
let xyz = mongoose.Schema({
    fullname : String,
    email : String
})
let abc = mongoose.model("employe",xyz);
module.exports=abc;
