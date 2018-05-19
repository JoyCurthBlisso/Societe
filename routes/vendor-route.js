var db = require("../models");

module.exports = function(app) {

    app.post("/vendor", function(req, res) {
    	db.Vendor.create(req.body).then(function(dbVendor) {
    		res.json(dbVendor);
    	});
    });
};

