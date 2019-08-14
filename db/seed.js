//Require Country Model
const Country = require("./model/country")

//Require json data
const countrydata = require("./countries.json")

Country.remove({})
.then(() => {
    Country.create(countrydata)
    .then((countries) => {
        console.log(countries)
       
    })
})
.catch((err) => {
    console.log(err)
})
