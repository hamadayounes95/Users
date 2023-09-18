const Person = require("../Modules/Person")

const AddPerson = async(req,res)=>{
   
   
    const {name,age,favoritfood}=req.body 

    const amp = new Person({
        name,
        age,
        favoritfood
       
    })
    await amp.save()
    res.json({msg:"hi"})
}
const getPersons =async(req,res)=>{
    const cat = await Person.find()
    res.json(cat)
} 
const getPerson =async(req,res)=>{
    const cop = await Person.findById(req.params.id)
    res.json(cop)
}
const getOnePerson =async (req,res)=>{
    const tac =await Person.findOne({name : req.query.name}).select("name")
    res.json(tac)
}
const removePerson =async(req,res)=>{
    const del =await Person.findByIdAndRemove(req.params.id)
    res.json(del)
}
const updatePerson = async(req,res)=>{
    const up =await Person.findByIdAndUpdate(req.params.id,req.body)
    res.json(up)
}

module.exports= {
  AddPerson,
  getPersons,
  getPerson,
  getOnePerson,
  removePerson,
  updatePerson
}
