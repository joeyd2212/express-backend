let express = require("express")
let router = express.Router()

let countryController = require("../controllers/country") 
                    //change path to controllers/country when created
//Create CRUD functionality 

//find all
router.get("/", countryController.index)

//create
router.post("/", countryController.create);

//find by name
router.get("/:id", countryController.show);  

//update name
router.put("/:name", countryController.update);  

//delete by name
router.delete("/:id", countryController.destroy);  






//export the router 
module.exports = router;