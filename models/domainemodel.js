const mongoose = require('mongoose');
const Schema =mongoose.Schema
const specialite = new Schema({



    nomspecialite:{
        type : String,
        required:true,
        trim:true
    },
})

const domaineSchema  = mongoose.model('domaine',new mongoose.Schema(
    {

nomdomaine:{
    type:String,
    required:true,
    trim:true
},
specialite:[specialite],


specialite: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "specialite",
}],


    }
));
module.exports=domaineSchema;