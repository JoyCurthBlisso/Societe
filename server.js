const express = require('express');
const app = express();
const PORT = (process.env.PORT || 80);
app.use(require("./router.js"));
app.listen(PORT, () => {
  console.log('Example app listening on port '+PORT);
});