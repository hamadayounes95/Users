
const Film= require("../Modules/Movies")
const AddFilm = async(req,res)=>{
   
   
    const {title,url,type,date}=req.body 
    const amp = new Film ({
        title,
        url,
        type,
        date
    })
    await amp.save()
    res.json({msg:"hi"})
}

    const getFilms =async(req,res)=>{
        const cat = await Film.find()
        res.json(cat)
    } 

    const getFilm =async(req,res)=>{
        const cop = await Film.findById(req.params.id)
        res.json(cop)
    }
    const removeFilm =async(req,res)=>{
        const del =await Film.findByIdAndRemove(req.params.id)
        res.json(del)
    }
    const updateFilm = async(req,res)=>{
        const up =await Film.findByIdAndUpdate(req.params.id,req.body)
        res.json(up)
    }
    
    
    module.exports= {
        getFilms,
        getFilm,
        removeFilm,
        AddFilm,
        updateFilm
    }
    
