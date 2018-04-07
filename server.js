const express = require('express');
var db = require("./models");
const app = express();
const bodyParser = require("body-parser")
const PORT = (process.env.PORT || 8080);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/shopify", require("./routes/shopify-router.js"))
app.use("/db", require("./routes/db-router.js"))
app.use("/",require("./routes/router.js"));
app.use("/", express.static(__dirname+"/public"))
db.sequelize.sync().then(function()
	{
	app.listen(PORT, () => {
		app.set("db", db)
		console.log('Example app listening on port '+PORT);
	});
});