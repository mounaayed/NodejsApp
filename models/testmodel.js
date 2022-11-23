const mongoose = require('mongoose');
const Schema =mongoose.Schema
const question = new Schema({



    libelle:{
        type : String,
        required:true,
        trim:true
    },
   
    
    
   
})

const testSchema = mongoose.model('test',new mongoose.Schema(
    {
   titre :{
    type:String,
    required:true,
    trim:true
},
dateajout :{
    type:String,
    required:true,
    trim:true
},
duree :{
    type:String,
    required:true,
    trim:true
},
niveau :{
    type:String,
    enum:['debutant','moyenne','expert'],
    default:'debutant'
}, 
comptence :{
    type:String,
   
    trim:true
},
question:[question],


question: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
}],

    }
))
//Cryptage


module.exports= testSchema;