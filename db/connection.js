var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mern-lab", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;