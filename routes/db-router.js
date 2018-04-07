const express=require("express");
const request = require('request-promise');
const router = express.Router();
	router.all("/", (req,res)=>{
		var db = res.app.get("db");
		var Op = db.Sequelize.Op;
		switch (req.body.method){
			case "post":
				var tableName = req.body.tableName;
				delete req.body.method;
				delete req.body.tableName;
				db[tableName].create(req.body).then((data)=>{
					console.log(data);
					res.sendStatus(200);
				}).catch((err)=>{
					if(err){
						console.log(err);
						res.sendStatus(500);
					}
				})
				break;
			case "get":
				var tableName = req.body.tableName;
				var findQ = req.body.findAll ? findAll : findOne;
				var query = req.body.exact ? {req.body.qCol:req.body.qString} : {req.body.qCol:{[Op.like]:"%"+req.body.qString+"%"}};
				db[tableName][findQ]({where:query}).then(data=>{
					console.log(data);
					res.send(data);
				}).catch((err)=>{
					console.log(err);
					res.sendStatus(500);
				});
				break;
			default:
				res.sendStatus(500)
		}
});
module.exports=router;