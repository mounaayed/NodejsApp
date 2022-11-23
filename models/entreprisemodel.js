const mongoose = require('mongoose');
const user = require('./usermodel')
const entrepriseSchema = user.discriminator('entreprise',new mongoose.Schema(
    {

nomentreprise:{
    type:String,
    required:true,
    trim:true
},
matriculefiscale:{
    type:String,
    required:true,
    trim:true
},
localisation:{
    type:String,
    required:true,
    trim:true
},
secteuractivite:{
    type:String,
    required:true,
    trim:true
},
anneefondation:{
    type:String,
    required:true,
    trim:true
},
description:{
    type:String,
    required:true,
    trim:true
},
codepostale:{
    type:String,
    required:true,
    trim:true
},
valide:{
    type:Boolean,

    trim:true
},
    }
));
module.exports=entrepriseSchema;