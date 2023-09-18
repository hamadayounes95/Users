const mongoose=require('mongoose')
const per = mongoose.Schema({
    name : {
        type : String,
        required: true
    },
   
    age : {
        type : String
    },
    favoritefood :
    {
        type : [String]
    }

},
{
    timestamps :true
}


)
const Person = mongoose.model('Persons',per)
module.exports = Person