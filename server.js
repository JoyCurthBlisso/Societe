const express = require('express');
var db = require("./models");
require("dotenv").config({path: './societe.env'});

const app = express();
const bodyParser = require("body-parser")
const PORT = (process.env.PORT || 8080);

console.log(process.env);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/shopify", require("./routes/shopify-router.js"))
app.use("/db", require("./routes/db-router.js"))
app.use("/inventory", require("./routes/inventory-route.js"));
app.use("/suppliers", require("./routes/supplier-route.js"));
app.use("/",require("./routes/router.js"));
app.use("/", express.static(__dirname+"/public"))
db.sequelize.sync().then(function()
	{
	app.listen(PORT, () => {
		app.set("db", db)
		console.log('Example app listening on port '+PORT);
	});
});