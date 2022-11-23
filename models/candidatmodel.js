const mongoose = require('mongoose');
const user = require('./usermodel')
const Schema =mongoose.Schema
const offre = new Schema({
    titreposte:{
        type : String,
        required:true,
        trim:true
    },
})
const candidatSchema = user.discriminator('candidat',new mongoose.Schema(
    {

nom:{
    type:String,
    required:true,
    trim:true
},
valide:{
    type:Boolean,
    
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

//OFFRE
offre:[offre],

offre: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "offre",
}],
    }
));
module.exports=candidatSchema;


