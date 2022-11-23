const mongoose = require('mongoose');
const Schema =mongoose.Schema
const proposition = new Schema({



    ennonce:{
        type : String,
        required:true,
        trim:true
    },
    etat:{type:Boolean,
        required:true,
        trim:true

    },
})

const questionSchema = mongoose.model('question',new mongoose.Schema(
    {
 
    libelle :{
    type:String,
    required:true,
    trim:true
},
proposition:[proposition],


proposition: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "proposition",
}],


    }
))
//Cryptage


module.exports= questionSchema;