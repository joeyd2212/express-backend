//Require dependencies
const express = require('express')
const parser = require('body-parser')
const Country = require('./db/model/country')
const cors = require("cors")

let app = express()



//set port

//use dependencies - body-parser & cors

app.use(parser.json())
app.use(cors())







app.get("/",(req, res) =>{
    res.send("Your Local Host is Working!")
})

app.use("/api/country",require("./db/routes/countryroute"));



const PORT = process.env.PORT || 3001

//app is listening if the port gets a request
app.listen(PORT,() => console.info(`Running on ${PORT}`))