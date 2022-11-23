const mongoose = require('mongoose');
const test = require('./testmodel')
const Schema =mongoose.Schema
const question = new Schema({



    ennonce:{
        type : String,
        required:true,
        trim:true
    },
    
    reponsepossible:{
        type : String,
        required:true,
        trim:true
    },
    
    reponsecorrecte:{
        type : String,
        required:true,
        trim:true
    },
})

const testentrepriseSchema = test.discriminator('testentreprise',new mongoose.Schema(
    {
        identreprise :{
            type:String,
            required:true,
            trim:true
        },
        question:[question],


question: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
}],


    }
));
module.exports=testentrepriseSchema;