const mongoose = require('mongoose');

const propositionSchema = mongoose.model('proposition',new mongoose.Schema(
    {
        ennonce:{
            type : String,
            required:true,
            trim:true
        },
        etat:{type:Boolean,
            required:true,
            trim:true
    
        },


    }
))
//Cryptage


module.exports=propositionSchema;