const jwt = require('jsonwebtoken');
const config = require('../conf');


const verifyToken = async  (req,res,next) =>{
    const token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).send({auth:false,message:'Token not available'});
    }
    const decoded = await jwt.verify(token,config.secret);
    req.userId = decoded.id;
    next();
}

module.exports = verifyToken;

