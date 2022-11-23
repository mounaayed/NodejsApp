const mongoose = require('mongoose');

const templatecvSchema = mongoose.model('templatecv',new mongoose.Schema(
    {
   nomtemplate :{
    type:String,
    required:true,
    trim:true
},

image :{
    type:String,
    required:true,
    trim:true
},

    }
))
//Cryptage


module.exports= templatecvSchema;