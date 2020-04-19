const express = require('express');
const app = express();

app.listen(3000, function() {
	console.log("http://127.0.0.1:3000");
});

app.get("/", function(req, res, next) {
	res.send("<h1>Hello, World!!!!!!!!!</h1>");
});

app.get("/hello", function(req, res, next) {
	var name = req.query.name;
	res.send("<h1>Hello, "+name+"</h1>");
});

app.get("/front/:id", function(req, res, next) {
	var id = Number(req.params.id);
	var books = [
		{id: 1, name: '별주부전', desc: '용왕이 토끼를...'},
		{id: 2, name: '홍길동전', desc: '아버지를 아버지라...'},
		{id: 3, name: '구운몽전', desc: '꿈을 꿨구나...'},
		{id: 4, name: '심청전', desc: '아버지...'},
	];
	switch(id) {
		case 1:
		case 2:
		case 3:
		case 4:
			res.send(`
			<p>
				<h1>${books[id-1].name}</h1>
				<div>${books[id-1].desc}</div>
			</p>`);
			break;
		default:
			res.send(`
			<p>
				<h1>도서를 찾을 수 없습니다. 다시 검색해 주세요.</h1>
			</p>`);
			break;
	}
});


