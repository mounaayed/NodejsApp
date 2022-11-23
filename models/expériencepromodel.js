const mongoose = require('mongoose');

const experienceSchema = mongoose.model('experience',new mongoose.Schema(
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
nomsociete:{
    type:String,
    required:true,
    trim:true
},
posteocupe:{
    type:String,
    required:true,
    trim:true
},
tacherealise:{
    type:String,
    required:true,
    trim:true
},

    }
))
//Cryptage


module.exports=experienceSchema;