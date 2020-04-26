const express = require('express');
const app = express();
const path = require('path');

/* 서버 구동 */
app.listen(3000, function(){
	console.log("http://127.0.0.1:3000");
	console.log(path.join(__dirname, "./public"));
});

/* 정적라우터 */
app.use("/", express.static(path.join(__dirname, "./public")));

/* Router 구현 */
app.get("/", function(req, res, next){
	res.send('<h1>Hello, World</h1>');
});

app.get("/query", function(req, res, next){
	var name = req.query.name;
	res.send('<h1>Hello, World '+name+'</h1>');
});

app.get("/param/:name", function(req, res, next){
	var name = req.params.name;
	res.send('<h1>Hello, World '+name+'</h1>');
});
