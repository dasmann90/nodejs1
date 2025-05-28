const notFoundMiddleware = (req,res,next)=>{
    res.send('Not Found the URL !')
}

module.exports = notFoundMiddleware;