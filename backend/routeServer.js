const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const middlewareJWT = require('./middleware/JsonWebToken');
const UserModel = require('./models/User');

let initRoutes = (app) => {
    router.post('/login',(req,res) => {
        const token = jwt.sign({username : req.body.username},process.env.JWT_TOKEN_KEY);
        res.json(token);
    });
    router.post('/register', async (req,res) => {
    	let payload = req.body;
    	let user = await new UserModel(payload);
    	let userSave = await user.save();
    	console.log(userSave)
    	res.json(user);
    });
    router.use(middlewareJWT);

    router.post('/getdata',async (req,res) => {
        let user = await UserModel.getUserById(3);
        console.log(user);
        res.json(user);
    })
    return app.use('/api',router)
}
module.exports = initRoutes;