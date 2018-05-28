var db = require("../models");
var express = require('express');
var router = express.Router();

module.exports = function(app) {

    app.post("/orders", function(req, res) {
    	db.Order.create(req.body).then(function(dbOrder) {
    		res.json(dbOrder);
    	});
    });
};

module.exports=router;


