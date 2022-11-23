const mongoose = require('mongoose');

const competencerequisSchema = mongoose.model('competencerequis',new mongoose.Schema(
    {
   nomcompetence :{
    type:String,
    required:true,
    trim:true
},

niveau :{
    type:String,
    enum:['debutant','moyenne','expert'],
    default:'debutant'
},

    }
))
//Cryptage


module.exports= competencerequisSchema;