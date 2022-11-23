const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.model('user',new mongoose.Schema(
    {
   username :{
    type:String,
    required:true,
    trim:true
},
password:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    required:true,
    trim:true
},
numtel:{
    type:Number,
    required:true,
    trim:true
},
avatar:{
    type:String,
    required:true,
    trim:true
},
    }
    //Cryptage 
)
.pre("save",function(next){
    this.password= bcrypt.hashSync(this.password,10)
    next()
    })


)




module.exports=userSchema;