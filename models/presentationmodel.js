const mongoose = require('mongoose');

const presentationSchema = mongoose.model('presentation',new mongoose.Schema(
    {
   nom :{
    type:String,
    required:true,
    trim:true
},
prenom:{
    type:String,
    required:true,
    trim:true
},
adresse:{
    type:String,
    required:true,
    trim:true
},
numtel:{
    type:Number,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true
},
permisdeconduite:{
    type:String,
    required:true,
    trim:true
},
postecherche:{
    type:String,
    required:true,
    trim:true
},
    }
))
//Cryptage


module.exports=presentationSchema;