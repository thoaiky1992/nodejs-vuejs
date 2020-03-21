const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require("socket.io")(server);
const cors = require('cors');
const jwt = require('jsonwebtoken');
const initRoutes = require('./routes/routeServer');
const initSocketIo = require('./socketio/index');
require('dotenv').config();

server.listen(process.env.PORT);
app.use(express.json());
app.use(cors({origin: process.env.ALLOW_ORIGIN_DOMAIN }));

initRoutes(app);
initSocketIo(io);



