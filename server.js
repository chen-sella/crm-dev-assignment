const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist/crm-dev"));

app.get("/**", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "crm-dev", "index.html"));
});

app.listen(process.env.PORT || 8080);
console.log("Console listening!");
console.log(__dirname, 'dirname');


