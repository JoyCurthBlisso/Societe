var db 			= require("../models");
var express		= require("express");
var router 		= express.Router();

router.post("/", function(req, res) {
	db.material.create(req.body).then(function(dbInventory) {
		res.json(dbInventory);
	});
});

router.get("/all", function(req, res){
	db.material.findAll().then(function(inventory){
		res.json(inventory);
	});
});

module.exports=router;