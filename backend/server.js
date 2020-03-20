const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server);
const cors = require('cors');
const jwt = require('jsonwebtoken');
const initRoutes = require('./routeServer');
const initSocketIo = require('./socketio/index');
require('dotenv').config();

server.listen(process.env.PORT);
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

initRoutes(app);
initSocketIo(io);



