require("../config/db")

const mongoose = require("mongoose")

const teacherSchema = mongoose.Schema({
    name : String,
    email : String,
    contact : String,
    country : String,
    gender : String,
    address : String
}, {collection : "teacher" })

module.exports = mongoose.model("teacher", teacherSchema)