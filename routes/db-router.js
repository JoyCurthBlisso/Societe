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
				db[tableName].create(req.body).then((data)=>console.log(data)).catch((err)=>console.log(err))
		}
		res.send(200);
});
module.exports=router;