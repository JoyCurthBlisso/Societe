const dotenv = require('dotenv').config();
const express=require("express");
const request = require('request-promise');
const router = express.Router();
const url = process.env.DYNO ? "https://societe-portsmouth.herokuapp.com" : "http://localhost:8080";
const shopRequestHeaders = {
        'X-Shopify-Access-Token': process.env.SHOPIFY_KEY,
      };
    router.post("/order", (req,res)=>{
    	var db = res.app.get("db");
		var Op = db.Sequelize.Op;
		var items = req.body.line_items;
		console.log("=============")
		console.log(items)
		console.log("=============")
		items.forEach(item=>{
			db["material"].findOne({where:{"commonName":item.title}}).then(dbItem=>{
				var newQ = dbItem.qtyOnHand - item.quantity;
				db["material"].update({qtyOnHand:newQ},{where:{"commonName":item.title}}).then(data=>{
				console.log("updated DB successfully with new quantity "+newQ);
				res.sendStatus(200)
				});
			});
		});
    });
    router.post("/refund", (req,res)=>{
    	var db = res.app.get("db");
		var Op = db.Sequelize.Op;
    });
	router.all("/", (req,res)=>{
		var db = res.app.get("db");
		var Op = db.Sequelize.Op;
		switch (req.body.method){
			case "post":
				var tableName = req.body.tableName;
				delete req.body.method;
				delete req.body.tableName;
				req.body.qtyOnHand = req.body.qtyPurchased;
				db[tableName].create(req.body).then((data)=>{
					console.log("adding record")
					//call shopify
					res.sendStatus(200);
					res.end();
					req.body.shopify = true;
					//HEY MAYBE FIX THIS LATER ^^^^
					if (req.body.shopify){
						console.log("calling shopify");
						var product = shopifyTranslate(req.body);
						var options = {
						    method: 'POST',
						    url: "https://societe-portsmouth.myshopify.com/admin/products.json",
						    body: {
						        product
						    },
						    json:true,
						    headers:shopRequestHeaders
						};
						request(options).then((data2)=>{
							console.log("IT WORKED")
							console.log(data2);
						}).catch(err=>{
							console.log("DIDN'T WORK")
							console.log(err);
						})
					}
				}).catch((err)=>{
					if(err){
						console.log(err);
						res.sendStatus(500);
					}
				})
				break;
			case "get":
				var tableName = req.body.tableName;
				var findQ = req.body.findAll ? "findAll" : "findOne";
				var col = req.body.qCol;
				var query = {};
				query[col] = req.body.exact ? req.body.qString : {[Op.like]:"%"+req.body.qString+"%"};
				console.log(query);
				db[tableName][findQ]({where:query}).then(data=>{
					console.log(data);
					res.send(data);
				}).catch((err)=>{
					console.log(err);
					res.sendStatus(500);
					console.log("=========================================")
				});
				break;
			default:
				res.sendStatus(500)
		}
});
module.exports=router;
function shopifyTranslate(object){
	//latin name??
	var shopifyObject ={
		title:object.commonName,
		body_html:object.description,
		vendor:"Société Portsmouth",
		published:false,
		variants:[{
			price:object.societeRetailPrice,
			sku:object.sku,
			inventory_quantity:object.qtyPurchased
		}]
	}
	return shopifyObject;
	//images?
}