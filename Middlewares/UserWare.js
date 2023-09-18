const jwt=require('jsonwebtoken')



const chekauth=async (req,res,next)=>{
 try {
    const token=req.headers.authorization
    if(token){
        const result=jwt.verify(token,'mouad')
        req.user =result
        next()
    }
    else {
        console.log('no token')
        next()
    }






 } catch (error) {
    
 }
}
module.exports=chekauth