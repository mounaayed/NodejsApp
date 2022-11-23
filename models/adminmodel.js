const mongoose = require('mongoose');
const user = require('./usermodel')
const adminSchema = user.discriminator('admin',new mongoose.Schema(
    {

        privilége:{
            type:String,
            required:true,
            trim:true
        },
    }
));
module.exports=adminSchema;