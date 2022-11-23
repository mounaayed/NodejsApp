const mongoose = require('mongoose');
const Schema =mongoose.Schema
const competence = new Schema({



    nomcompetence:{
        type : String,
        required:true,
        trim:true
    },
})

const specialiteSchema = mongoose.model('specialite',new mongoose.Schema(
    {
   nomspecialite :{
    type:String,
    required:true,
    trim:true
},
competence:[competence],


competence: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "competence",
}],

    }
))
//Cryptage


module.exports= specialiteSchema;