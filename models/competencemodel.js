const mongoose = require('mongoose');


const competenceSchema = mongoose.model('competence',new mongoose.Schema(
    {
   nomcompetence :{
    type:String,
    required:true,
    trim:true
},






    }
))
//Cryptage


module.exports= competenceSchema;