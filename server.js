const express = require('express');
const app = express();
const server = require('http').createServer(app);
server.listen(3000);


app.engine('html', require('ejs').renderFile);

app.set('view engine','html')

app.set('views','./');

app.use(express.static('./public'));

app.get('*',(req,res) => {
	let title = "nodejs-vuejs";
	res.render('index',{title});
})