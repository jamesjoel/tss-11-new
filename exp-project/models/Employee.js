require("../config/db");
let mongoose = require("mongoose")

let xyz = mongoose.Schema({
    name : String,
    post : String
})

let abc = mongoose.model("employee", xyz);

module.exports = abc;