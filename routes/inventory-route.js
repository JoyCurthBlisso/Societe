var db = require("../models");

module.exports = function(app) {

    app.post("/inventory", function(req, res) {
    	db.Inventory.create(req.body).then(function(dbInventory) {
    		res.json(dbInventory);
    	});
    });
};

