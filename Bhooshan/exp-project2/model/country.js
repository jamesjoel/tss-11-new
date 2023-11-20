
require("../config/db")
const mongoose = require("mongoose")

const countrySchema = mongoose.Schema({
    country : String,
    population : Number
}, { collection : "country" })

module.exports = mongoose.model("country", countrySchema)
