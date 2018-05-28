var db = require("../models");
var express = require('express');
var router = express.Router();

module.exports = function(app) {

	app.get("/order/:id", function(req, res) {
		db.Post.findOne({
			where: {
				id: req.params.id
			},
			include: [db.Order]
		}).then(function(dbOrder_item) {
			res.json(dbOrder_item);
		});
	});

    app.post("/order_item", function(req, res) {
    	db.Order_item.create(req.body).then(function(dbOrder_item) {
    		res.json(dbOrder_item);
    	});
    });

    app.delete("/order_item/:id", function(req, res) {
    	db.Post.destroy({
    		where: {
    			id: req.params.id
    			}
    		}).then(function(dbOrder_item) {
    			res.json(dbOrder_item);
    	});
    });
    app.put("/order_item", function(req, res) {
        db.Order_item.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbOrder_item) {
            res.json(dbOrder_item);
        });
    });

};

module.exports=router;
