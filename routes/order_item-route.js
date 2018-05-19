var db = require("../models");

module.exports = function(app) {

    app.post("/order_item", function(req, res) {
    	db.Order_item.create(req.body).then(function(dbOrder_item) {
    		res.json(dbOrder_item);
    	});
    });
};

