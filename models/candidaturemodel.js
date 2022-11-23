const mongoose = require('mongoose');
const Schema =mongoose.Schema
const candidat = new Schema({



    nom:{
        type : String,
        required:true,
        trim:true
    },
    prenom:{
        type:String,
        required:true,
        trim:true
    },
    sexe:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        trim:true
    },
    adresse:{
        type:String,
        required:true,
        trim:true
    },
    civilite:{
        type:String,
        required:true,
        trim:true
    },
    cin:{
        type:String,
        required:true,
        trim:true
    },
    codepostale:{
        type:String,
        required:true,
        trim:true
    },
    
   
})

const candidatureSchema = mongoose.model('candidature',new mongoose.Schema(
    {
   etats :{
    type:String,
    required:true,
    trim:true
},

dateenvoicandidature :{
    type:String,
    required:true,
    trim:true
},
 //
 candidat:[candidat],
    
 candidat: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: "candidat",
 }],
    }
))
//Cryptage


module.exports= candidatureSchema;