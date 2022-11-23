const mongoose = require('mongoose');

const niveauSchema = mongoose.model('niveau',new mongoose.Schema(
    {
   score :{
    type:String,
    required:true,
    trim:true
},

dureéprise :{
    type:String,
    required:true,
    trim:true
},
etat:{
    type:String,
    required:true,
    trim: true
}
    }
))
//Cryptage


module.exports= niveauSchema;