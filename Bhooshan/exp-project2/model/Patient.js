require("../config/db");

const mongoose = require("mongoose")

const PatientSchema = mongoose.Schema({
       fullname : String,
       Email : String,
       contact : String,
       gender : String,
       Adress : String,
       createAt : { type : Date , default : new Date()}
       
    })

 module.exports = mongoose.model("patient", PatientSchema)