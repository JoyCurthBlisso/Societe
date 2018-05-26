const dotenv = require('dotenv').config();
const express=require("express");
const request = require('request-promise');
const router = express.Router();
const url = process.env.DYNO ? "https://societe-portsmouth.herokuapp.com" : "http://localhost:8080";
const shopRequestHeaders = {
        'X-Shopify-Access-Token': process.env.SHOPIFY_KEY,
      };
    //webhooks
    	//order 
    router.post("/order", (req,res)=>{
    	console.log("An order just came in!");
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
			}).catch(error=>{
				console.log(error);
			});
		});
    });
    	//refund
    router.post("/refund", (req,res)=>{
    	console.log("processing a refund!!")
		var db = res.app.get("db");
		var Op = db.Sequelize.Op;
		var items = req.body.line_items;
		console.log("=============")
		console.log(items)
		console.log("=============")
		items.forEach(item=>{
			db["material"].findOne({where:{"commonName":item.title}}).then(dbItem=>{
				var newQ = dbItem.qtyOnHand + item.quantity;
				db["material"].update({qtyOnHand:newQ},{where:{"commonName":item.title}}).then(data=>{
				console.log("updated DB successfully with new quantity "+newQ);
				res.sendStatus(200)
				});
			}).catch(error=>{
				console.log(error);
			});
		});
	});
	
	//Get all inventory
	router.get('/inventory', (req, res)=>{
		console.log('Getting all inventory!!');
		var db = res.app.get('db');
		db["material"].findAll().then(items=>{
			
			res.send(items);
		}).catch(error=>{
			console.log(error);
		})
	});

	//get all suppliers
	router.get('/suppliers', (req, res)=>{
		console.log('Getting all suppliers!');
		var db = res.app.get('db');
		db["supplier"].findAll().then(items=>{
			
			res.send(items);
		}).catch(error=>{
			console.log(error);
		})
	});

	router.get('/units', (req, res) => {
		var db = res.app.get("db");
		db["unitMeasure"].findAll().then(units=>{
			res.send(units);
		})
	});

    //more webhooks for product create/delete on shopify would be helpful but this gets presented in 4 hours lol
    //this handles any requests that make it this far (i.e. not webhooks)
	router.all("/", (req,res)=>{
		var db = res.app.get("db");
		var Op = db.Sequelize.Op;
		switch (req.body.method){
			//for POST requests
			case "post":
				var tableName = req.body.tableName;
				//remove elements that dont go into the DB
				delete req.body.method;
				delete req.body.tableName;
				req.body.qtyOnHand = req.body.qtyPurchased;
				req.body.shopify = req.body.shopify=="true" ? true : false;
				//add new record in the DB
				db[tableName].create(req.body).then((data)=>{
					console.log("adding record")
					res.sendStatus(200);
					res.end();
					//call shopify
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
						});
					}
				}).catch((err)=>{
					if(err){
						console.log(err);
						res.sendStatus(500);
					}
				});
				break;
			//to get from the DB;
			case "get":
				// var tableName = req.body.tableName;
				// var findQ = req.body.findAll ? "findAll" : "findOne";
				// var col = req.body.qCol;
				// var query = {};
				// query[col] = req.body.exact ? req.body.qString : {[Op.like]:"%"+req.body.qString+"%"};
				// console.log(query);
				// db[tableName][findQ]({where:query}).then(data=>{
				// 	console.log(data);
				// 	res.send(data);
				// }).catch((err)=>{
				// 	console.log(err);
				// 	res.sendStatus(500);
				// 	console.log("=========================================")
				// });
				break;
			default:
				res.sendStatus(500)
		}
});
module.exports=router;
//function to take what we get from the DB and make it into an object shopify expects
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