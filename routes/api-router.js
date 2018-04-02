//requirements
const express=require("express");
const request = require('request-promise');
const router = express.Router();
	function response(url,req,res){
		const accessToken = res.app.get('token')
		const shopRequestHeaders = {
        'X-Shopify-Access-Token': accessToken,
      };
		if (req.method!="GET"){
			request({method:req.method, url:"https://societe-portsmouth.myshopify.com/admin/"+url, body:req.body, headers : shopRequestHeaders})
			.then((shopResponse)=>{
				res.status(200).end(shopResponse);
			})
		}
		else{
			request({method:req.method, url:"https://societe-portsmouth.myshopify.com/admin/"+url, headers : shopRequestHeaders})
			.then((shopResponse)=>{
				res.status(200).end(shopResponse);
			})
		}
	}
	router.get("/info", (req,res)=>{
		response("shop.json", req, res);
	})
	router.get("/products", (req,res)=>{
		response("products.json", req, res)
	})
	router.post("/products", (req,res)=>{
		response("products.json", req, res)
	})
module.exports=router;