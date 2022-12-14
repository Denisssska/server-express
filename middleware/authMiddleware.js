const jwt = require('jsonwebtoken')
module.exports = function (req,res,next){
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(" ")[1] // Bearer rasvavav
        if(!token){
            return res.status(401).json({message:'not authorized'})
        }
        req.user = jwt.verify(token, process.env.SECRET_KEY)
        next()
    }catch (e) {
        res.status(401).json({message:"not authorized"})
    }
}