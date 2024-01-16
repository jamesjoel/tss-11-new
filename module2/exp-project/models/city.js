require("../config/db");

let mongoose = require("mongoose");
let citySchema =mongoose.Schema({
    id : Number,
    name : String,
    state : String
 } ,{collection : "city"})

 module.exports = mongoose.model("city", citySchema);