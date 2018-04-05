const express=require("express");
const request = require('request-promise');
const router = express.Router();
	router.get("/", (res,req)=>{
		var db = res.app.get("db");
		switch (req.body.method){
			case "post":
				var tableName = req.body.tableName;
				delete req.body.method;
				delete req.body.tableName;
				db[tableName].create(req.body)
		}
}
module.exports=router;