var db = require("../models");
var express		= require("express");
var router 		= express.Router();

// module.exports = function(app) {

// app.post("/supplier", function(req, res) {
//     	db.supplier.create(req.body).then(function(dbsupplier) {
//     		res.json(dbsupplier);
//     	});
//     });
// };

router.post("/", function(req, res) {
	db.supplier.create(req.body).then(function(dbSuppliers) {
		res.json(dbSuppliers);
	});
});

router.get("/all", function(req, res){
	db.supplier.findAll().then(function(suppliers){
		res.json(suppliers);
	});
});

module.exports=router;