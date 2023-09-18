const mongoose = require('mongoose')
const rh=mongoose.Schema({
    title :{
        type :String
    },
    url : {
        type:String
    },
    type : {
        type : String
    },
    dat : {
        type : String
    }
    
},
{
    timestamps :true
})
 
const Film = mongoose.model('films', rh)


module.exports=Film
