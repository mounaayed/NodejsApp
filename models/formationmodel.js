const mongoose = require('mongoose');

const formationSchema = mongoose.model('formation',new mongoose.Schema(
    {
   datedebut :{
    type:String,
    required:true,
    trim:true
},
  datefin:{
    type:String,
    required:true,
    trim:true
},
villepaye:{
    type:String,
    required:true,
    trim:true
},
diplome:{
    type:String,
    required:true,
    trim:true
},
etablissement:{
    type:String,
    required:true,
    trim:true
},

    }
))
//Cryptage


module.exports=formationSchema;