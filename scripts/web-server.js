var express = require("express");
var path = require("path");

var app = express();

var rootPath = path.normalize(__dirname+ '/../');

app.use(express.static(rootPath+'/app'));

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  //var addr = app.address();
  console.log("server listening at", process.env.IP + ":" + process.env.PORT);
});
