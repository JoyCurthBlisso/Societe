//package dependencies
const dotenv = require('dotenv').config();
const express=require("express");

const router = express.Router();
//begin route listing
router.get('/', (req, res, next) => {
	if (res.app.get('token')){
   		res.redirect("/index.html")
   	}
   	else{
   		res.redirect("/shopify?shop=societe-portsmouth.myshopify.com")
   	}
});
module.exports=router;