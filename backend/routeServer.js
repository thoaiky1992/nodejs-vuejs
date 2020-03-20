const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const middlewareJWT = require('./middleware/JsonWebToken');

let initRoutes = (app) => {
    router.post('/login',(req,res) => {
        const token = jwt.sign({username : req.body.username},process.env.JWT_TOKEN_KEY);
        res.json(token);
    });
    router.use(middlewareJWT);

    router.post('/test',(req,res) => {
        console.log(req.user);
    })
    return app.use('/api',router)
}
module.exports = initRoutes;