//requirements
const express=require("express");
const request = require('request-promise');
const router = express.Router();
	function response(url,req,res){
		const accessToken = res.app.get('token')
		const shopRequestHeaders = {
        'X-Shopify-Access-Token': accessToken,
      };
      	var options = {method:req.method, url:"https://societe-portsmouth.myshopify.com/admin/"+url, headers : shopRequestHeaders}; 
		switch (req.method){
			case "PUT":
			case "POST":
				options[body]=req.body;
				break;
		}
		request(options).then((shopResponse)=>{
					res.status(200).send(shopResponse);
				})
	};
	router.get("/info", (req,res)=>{
		response("shop.json", req, res);
	});
	router.get("/products", (req,res)=>{
		response("products.json", req, res)
	});
	router.post("/products", (req,res)=>{
		response("products.json", req, res)
	});
	router.put("/products", (req,res)=>{
		response("products/"+req.params.id+".json")
	});
module.exports=router;