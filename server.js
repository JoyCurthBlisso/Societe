const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const PORT = (process.env.PORT || 80);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api", require("./api-router.js"))
app.use("/",require("./router.js"));
app.listen(PORT, () => {
  console.log('Example app listening on port '+PORT);
});