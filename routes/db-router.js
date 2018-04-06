const express=require("express");
const request = require('request-promise');
const router = express.Router();
	router.all("/", (req,res)=>{
		var db = res.app.get("db");
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
			default:
				res.sendStatus(500)
		}
});
module.exports=router;