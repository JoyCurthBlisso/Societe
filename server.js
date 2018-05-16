const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const PORT = (process.env.PORT || 8080);
const app = express();
const apiRoutes = require("./routes/apiRoutes");

var db = require("./models");

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.use("/shopify", require("./routes/shopify-router.js"))
app.use("/db", require("./routes/db-router.js"))
app.use("/",require("./routes/router.js"));
app.use("/", express.static(__dirname+"/public"))

app.get("*", function(req, res){
	res.sendFile(path.join(_dirname, "./client/build/index.html"));
}

app.listen(PORT, function(){
	console.log('server now on port ${PORT}');
}

db.sequelize.sync().then(function()
	{
	app.listen(PORT, () => {
		app.set("db", db)
		console.log('Example app listening on port '+PORT);
	});
});