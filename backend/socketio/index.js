require('dotenv').config();
const socketioJwt = require('socketio-jwt')

let initSocketIo = (io) => {
	io.on('connection', (socket) => {
	// console.log('Socket connected. Authenticating...')
	}).on('connection', socketioJwt.authorize({
		secret: process.env.JWT_TOKEN_KEY,
		timeout: 15000
	})).on('authenticated', (socket) => {
		console.log(socket.request.user);
		// console.log(`Socket authenticated`)
	})
}
module.exports = initSocketIo;