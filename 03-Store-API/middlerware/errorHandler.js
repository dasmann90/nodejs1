const errorHandlerMiddleWare = (err,req,res,next)=>{
  return  res.status(500).json({msg:'somthing went worng !'})
}

module.exports = errorHandlerMiddleWare;