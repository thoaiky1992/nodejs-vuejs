const express = require('express');
const app = express();
const server = require('http').createServer(app);
server.listen(5000);
require('dotenv').config();
// socket.io JWT
const io = require("socket.io")(server)
const socketioJwt = require('socketio-jwt')
var jwt = require('jsonwebtoken');
app.engine('html', require('ejs').renderFile);

app.set('view engine','html')

app.set('views','./');
app.use(express.json());
app.use(express.static('./public'));
app.get('*',(req,res) => {
	let title = "nodejs-vuejs";
	res.render('index',{title});
})

io.on('connection', (socket) => {
	// console.log('Socket connected. Authenticating...')
}).on('connection', socketioJwt.authorize({
	secret: process.env.JWT_TOKEN_KEY,
	timeout: 15000
})).on('authenticated', (socket) => {
	console.log(socket.request.user);
	socket.on('send-token',data => {
		console.log(jwt.verify(data,process.env.JWT_TOKEN_KEY));
	})
	// console.log(`Socket authenticated`)
})

app.post('/api/login',(req,res) => {
	const token = jwt.sign({username : req.body.username},process.env.JWT_TOKEN_KEY ,{expiresIn: '365d'});
	req.user = jwt.verify(token,process.env.JWT_TOKEN_KEY);
	res.json(token);
});