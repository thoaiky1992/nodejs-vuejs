require('dotenv').config();
const socketioJwt = require('socketio-jwt')

let initSocketIo = (io) => {
	io.on('connection', (socket) => {

	})
	.on('connection', socketioJwt.authorize({
		secret: process.env.JWT_TOKEN_KEY,
		timeout: 15000
	}))
	.on('authenticated', (socket) => {
		// console.log(socket.decoded_token);
	})
}
module.exports = initSocketIo;