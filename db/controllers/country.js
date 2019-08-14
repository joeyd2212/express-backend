const Country = require("../model/country")

module.exports = {
    index: function (req, res) {
        Country.find({}).then(country => res.json(country));
    },
    create: function(req, res) {
        Country.create(req.body).then(country => res.json(country));
    },
    show: function(req, res) {
        Country.findById(req.params.id).then(country => res.json(country));   
    },
    update: function(req, res) {
        Country.findOneAndUpdate(
        { name: req.params.name },
        req.body,
        
      ).then(country => res.json(country));
    },
    destroy: function(req, res) {
        Country.findByIdAndRemove(req.params.id).then(country =>
        res.send(country)
      );
    }  
    
};

