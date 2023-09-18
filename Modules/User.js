const mongoose =require('mongoose')
const hr = mongoose.Schema({
    nom : {
        type : String
    },
    prenom : {
        type : String
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    motpasse : {
        type : String,
        require :true 
    },
    telephone : {
        type : String
    },

},
{
    timestamps :true
}


)
const User = mongoose.model('Users',hr)
module.exports = User