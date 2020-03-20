const jwt = require('jsonwebtoken');
let middilewareJWT = (req,res,next) => {
    let token = req.headers.authorization;
    if(token){
        jwt.verify(token.split(' ')[1],process.env.JWT_TOKEN_KEY, function(err,decode){
            if(err){
                res.status(401),json({
                    message : 'Unauthorized !!!'
                })
            }
            req.user = decode;
            next();
        })
    }else{
        res.status(403).json({
            message : 'No token provided !!!'
        })
    }
}
module.exports = middilewareJWT