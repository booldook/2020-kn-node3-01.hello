const express = require('express');
const app = express();

app.listen(3000, function() {
	console.log("http://127.0.0.1:3000");
});

app.get("/", function(req, res, next) {
	res.send("<h1>Hello, World</h1>");
});

app.get("/hello", function(req, res, next) {
	var name = req.query.name;
	res.send("<h1>Hello, "+name+"</h1>");
});


