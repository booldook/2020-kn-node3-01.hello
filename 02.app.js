const express = require('express');
const app = express();
const path = require('path');

var sample = '';

/* 서버 구동 */
app.listen(3000, function(){
	console.log("http://127.0.0.1:3000");
	console.log(path.join(__dirname, "./public"));
});

/* 정적라우터 */
app.use(function(req, res, next) {
	sample = 'SAMPLE';
	next();
});
app.use(express.json()); // 모든 req를 순회하면서 json으로 변경해준다.
app.use(express.urlencoded({extended: false})); // form 요소에 접근하게 해준다.
app.use("/", express.static(path.join(__dirname, "./public")));

/* Router 구현 */
app.get("/root", function(req, res, next){
	res.send('<h1>Hello, '+sample+'</h1>');
});

app.get("/query", function(req, res, next){
	var name = req.query.name;
	res.send('<h1>Hello, World '+name+'</h1>');
});

app.get("/param/:name", function(req, res, next){
	var name = req.params.name;
	res.send('<h1>Hello, World '+name+'</h1>');
});

app.post("/board/save", function(req, res, next){
	/*
	const title = req.body.title;
	const content = req.body.content;
	*/
	const {title, content} = req.body;
	res.send(title + '<br>' + content);
});


