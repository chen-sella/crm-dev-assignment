const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist/crm-dev"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "crm-dev", "index.html"));
  //   res.sendFile("index.html", { root: "dist/crm-dev/" });
});

app.listen(process.env.PORT || 8080);
console.log("Console listening!");

// function requireHTTPS(req, res, next) {
//   if (!req.secure && req.get("x-forwarded-proto") !== "https") {
//     return res.redirect("https://" + req.get("host") + req.url);
//   }
//   next();
// }
// app.use(express.static("./dist/crm-dev"));
// app.use(requireHTTPS);
