const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const PORT = (process.env.PORT || 80);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api", require("./routes/api-router.js"))
app.use("/",require("./routes/router.js"));
app.use("/", express.static(__dirname+"/public"))
app.listen(PORT, () => {
  console.log('Example app listening on port '+PORT);
});