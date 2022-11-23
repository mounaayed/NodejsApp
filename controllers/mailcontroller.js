const sendmodel = require('../models/mailmodel')
const nodemailer = require('nodemailer')
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
const jwt = require("jsonwebtoken");

const multer = require("multer");
var fs = require("fs");
const upload = multer({dest:__dirname+"/uploads/docs/"})

module.exports ={

    
    sendmail : function(req,res){

        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
          service: 'gmail',
          auth: {
            user: 'ayedmounalfinfo@gmail.com',
            pass: '06992242lf'
          }
        });
        
        var mailOptions = {

            from: ' "Marwa Aissav"  ',
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text
            
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
            console.log(mailOptions)
          } else {
            console.log('Email sent: ' + info.response);
            res.json(info)
          }
        })
        transporter.close();
        
    },
    ajoutermail: function(req,res){
      var file = __dirname+"/uploads/docs/"+req.file.originalname;
      fs.readFile(req.file.path, function(err,data){
          fs.writeFile(file,data,function(error){
              if(error){
                  var response = {
                      message:"sorry could not upload file",
                       filename:req.file.originalname
                  }
              }

                else { const sendmodel1 = new sendmodel({
                  to:req.body.to,
                  subject:req.body.subject,
                  text:req.body.text,
                  
                  document: req.file.originalname 
              } 
      )
      sendmodel1.save(function(err){
          if (err){
              res.json({state:"no", msg:"error"+err})
          }
          else {
              res.json({state:"yes", msg:"correct"})
          }
      })}
  })
})

}, 
listmail: (req,res) =>{
  sendmodel.find({},(err,list)=>{
      if(err){
          res.json({state : 'no', msg :'error'+err})
      }else{
          res.json(list)
      }
  }
  )
  
},

}