const mongoose = require('mongoose');
const Schema =mongoose.Schema
const entreprise = new Schema({



    nomentreprise:{
        type : String,
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

const offreSchema = mongoose.model('offre',new mongoose.Schema(
    {
        titreposte:{
            type : String,
            required:true,
            trim:true
        },
        description:{type:String,
            required:true,
            trim:true
    
        },
        typecontrat:{type:String,
            required:true,
            trim:true
    
        },
        experienceexige:{type:String,
            required:true,
            trim:true
    
        },
        niveauetudeexige:{type:String,
            required:true,
            trim:true
    
        },
        datedebutpublication:{type:String,
            required:true,
            trim:true
    
        },
        datefinpublication:{type:String,
            required:true,
            trim:true
    
        },
        entreprise :[entreprise],


        entreprise: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "entreprise",
}],
competence :[competence],


        competence: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "competence",
}],



    }
))
//Cryptage


module.exports=offreSchema;