const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const middlewareJWT = require('./../middleware/JsonWebToken');
const UserController = require('../controllers/UserController');

let initRoutes = (app) => {
    router.post('/login',UserController.login) ;
    router.post('/register', UserController.register);

    // all route with Authenticated
    router.use(middlewareJWT);
    router.post('/getdata',async (req,res) => {
        let user = await UserModel.getUserById(3);
        console.log(user);
        res.json(user);
    })
    return app.use('/api',router)
}
module.exports = initRoutes;