const express = require("express");
const ipdBasic = require("./demo.json");
var app = express();
/** EDIAG_DESC: '入院診斷' 找相似的入院診斷(可能有相同的病症)
 *  BADNO: '床號', 找相似的床號(可能在附近)
 *  RSV_CPD_DATE： '預計出院日期' :找相似的出院日期
 *
 */
app.get("/", function(req, res) {
  res.json(ipdBasic);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
