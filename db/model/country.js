//Require dependencies
const mongoose = require("../connection")
const Schema = mongoose.Schema

const CountrySchema = new Schema({
    name: String,
    capital: String
})

module.exports = mongoose.model("Country", CountrySchema)

