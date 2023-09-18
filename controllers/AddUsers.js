const User = require("../Modules/User")
const bcryptejs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const logi =async(req,res)=>{
    try {
        console.log(req.body)
        const us =await User.findOne({email:req.body.email})
        if(!us){
            res.json({message : 'User Not found,Sign up please!'})
        }
        else{
            console.log(us)
            const chekpass = await bcryptejs.compare(req.body.motpasse,us.motpasse)
            if(chekpass){
                const token =jwt.sign({id:us._id, email:us.email},'mouad',{expiresIn:'7d'})
                res.json({
                    message:'welcome again',
                    token
                })
            }
            else{
                res.json({message:'Password wrong!try again'})

            }
        }
    } catch (error) {
        console.log(error)
        
    }
}

const AddUsers = async(req,res)=>{
    const {nom,prenom,email,motpasse,telephone}=req.body
    const hashPass = await bcryptejs.hash(motpasse, 10)
    const am = new User({
        nom,
        prenom,
        email,
        motpasse: hashPass,
        telephone
    })
    await am.save()
    res.json({msg:"hello"})
}
const getUser = async(req,res)=>{
    const no=await User.find()
    res.json(no) 
}
const getUsers =async(req,res)=>{
    const ok=await User.findById(req.params.id)
    res.json(ok) 
}
const removeUsers =async(req,res)=>{
    const on=await User.findByIdAndRemove(req.params.id)
    res.json(on) 
}
const UdapteUsers =async(req,res)=>{
    const of=await User.findByIdAndUdapte(req.params.id,req.body)
    res.json(of)
}
const reg = async(req,res)=>{
    try {
        
        const pas = await bcryptejs.hash(req.body.motpasse, 10) 
        console.log(pas)
        const Us = await User.create({
            nom : req.body.nom,
            prenom : req.body.prenom,
            email : req.body.email,
            motpasse : pas,
            telephone: req.body.telephone
        
        })
        res.json(Us)
    } catch (error) {
        console.log(error.message)
        //res.json(error)
    }
}
const login =async(req,res)=>{
    try {
        const Y = await User.findOne({email : req.body.email})
        if(!Y) {
            res.json({msg:'not correct'})
        }
        else {
            const paswo =await bcrypte.compare(req.body.motpasse,Y.motpasse)
            if(paswo == true)
            {
                res.json({msg:'welcome'})
            }
            else {
                res.json({msg:'wrong'})
            }
        }
       
    } catch (error) {
        
    }
}
const profile=async(req,res)=>{
   try {
    const me = await User.findOne({_id:req.user.id})
    res.json(me)
    
   } catch (error) {
    
   }
}
module.exports={
    getUser,
    getUsers,
    removeUsers,
    UdapteUsers,
    AddUsers,
    reg,
    login,
    logi,
    profile

}




