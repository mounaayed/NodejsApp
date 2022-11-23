const mongoose = require('mongoose');
const Schema =mongoose.Schema
const presentation = new Schema({



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
    permisdeconduite:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    postecherché:{
        type:String,
        required:true,
        trim:true
    },
   
    
   
})
const formation = new Schema({



    datedebut:{
        type : String,
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
        type:Number,
        required:true,
        trim:true
    },
    etablissement:{
        type:String,
        required:true,
        trim:true
    },
  
   
    
   
})
const experience = new Schema({



    datedebut:{
        type : String,
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
        type:Number,
        required:true,
        trim:true
    },
    tacherealise:{
        type:String,
        required:true,
        trim:true
    },
    posteocupe:{
        type:String,
        required:true,
        trim:true
    },
   
   
    
   
})
const competence = new Schema({



    nomcompetence:{
        type : String,
        required:true,
        trim:true
    },
 
   
   
   
    
   
})
const cvSchema = mongoose.model('CV',new mongoose.Schema(
    {
   centreinteret :{
    type:String,
    required:true,
    trim:true
},
choixphoto:{
    type:String,
    required:true,
    trim:true
},
couleur:{
    type:String,
    required:true,
    trim:true
},
presentation:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref : "presentation"

    }
],
formation:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref : "formation"

    }
],
experience:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref : "experience"

    }
],
competence:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref : "competence"

    }
],
presentation:[presentation],
formation:[formation],
experience:[experience],
competence:[competence]
    }
))
//Cryptage


module.exports=cvSchema;