const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/dist"));
app.listen(process.env.PORT || 8080);

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
    //   res.sendFile("index.html", { root: "dist/crm-dev/" });
});

console.log('Console listening!');

// function requireHTTPS(req, res, next) {
//   if (!req.secure && req.get("x-forwarded-proto") !== "https") {
//     return res.redirect("https://" + req.get("host") + req.url);
//   }
//   next();
// }
// app.use(express.static("./dist/crm-dev"));
// app.use(requireHTTPS);
