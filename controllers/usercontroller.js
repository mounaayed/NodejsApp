const User = require('../models/usermodel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const multer = require("multer");
var fs = require("fs");
const upload = multer({dest:__dirname+"/uploads/images/"})
module.exports = {
    ajouterUser: function(req,res){
        var file = __dirname+"/uploads/images/"+req.file.originalname;
        fs.readFile(req.file.path, function(err,data){
            fs.writeFile(file,data,function(error){
                if(error){
                    var response = {
                        message:"sorry could not upload file",
                         filename:req.file.originalname
                    }
                }

                  else { const User1 = new User({
                    username:req.body.username,
                    password:req.body.password,
                    numtel:req.body.numtel,
                    email:req.body.email,
                    avatar: req.file.originalname 
                } 
        )
        User1.save(function(err){
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
    listUser: (req,res) =>{
        User.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyid :(req,res)=>{
        User.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerUser : (req,res)=>{
        User.findOneAndRemove({_id:req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
              res.json({state : 'ok',msg:'done'}) 
            }
        })  
      },
      UpdateUser : function(req,res){
        User.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {
                username:req.body.username,
                password:req.body.password,
                numtel:req.body.numtel,
                email:req.body.email,
                avatar: req.body.avatar 
    
            },
            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done'}) 
                }
            }
    
    
        )
    },
    getFile : function(req,res){
        res.sendFile(__dirname+"/uploads/images/"+req.params.avatar)
    },
    Authentification: function(req,res){
        User.findOne({email:req.body.email},function(err,userInfo){
            if (err){
                console.log(err)
            }else{
                console.log(userInfo)
                 if (bcrypt.compare(req.body.password,userInfo.password)){
                     const token = jwt.sign({id:userInfo._id},req.app.get('secretKey'),{expiresIn:'1h'})
                     res.json({state:"ok",msg:"user found",data:{user:userInfo,token}})
                 }else{
                     res.json({state:"no",msg:"invalid password",data:null})
                 }
            }
        }
        
        
        
        
        )
    
    },
    motdepasseoublier: function(req,res){
        var email;
    
        var id;
    
        var token;
    
        // var role;
    
    
         //if (req.body.Email !== undefined && req.body.Email !== null){
    
        if ( req.body.email !== null){
    
            email = req.body.email;
    
            User.findOne({email:email}, function(err,result){
    
                if(result){
    
                    id = result._id;
    
                    // role = result.Role.Name;
    
                    // photo = result.Photo;
    
                    token = jwt.sign({Id:id},req.app.get("secretKey"),{expiresIn:'1h'});
    
                    const output = 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                        'http://localhost:4200'+ '/newpassword/' + token  + '\n\n' +
                       'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    
                    mailOptions.to = email;
    
                    mailOptions.html = output;
    
    
    
                    // create reusable transporter object using the default SMTP transport
    
                    // send mail with defined transport object
    
                    transporter.sendMail(mailOptions, function(error, info) {
    
                        if (error) {
    
                            res.send({"errorSendingEmail":"errorSendingEmail"});
    
                        }
    
                        else{
    
                            res.send({"state":"succes(email sent)"});
    
                        }
                    });
                }
                else{
    
                    res.send({"errorFoundEmail":"EmailNotFound"});
                }
            })
        }
        else{
            res.send({"errorPassword":"passwordNull"});
        }
    },
    chnagermdp: function (req,res) {
        console.log('asyyyyyyyyyyaaaaaaaaaaaaaaa')
        var id;
        jwt.verify(req.params.token, req.app.get('secretKey'),function(err,decoded){
    
            if(err){
    
                res.send({"errorToken":err.message, data:null});
    
            }
    
            else{
    
                id = decoded.Id;
    
                User.findOneAndUpdate({_id:id},{
    
                    MotDePasse:bcrypt.hashSync(req.body.MotDePasse,10)},function(error , result){
    
                    if(error){
    
                        res.send({"errorPassword":"passwordError"})
                    }
                    else{
                        const output = '   <h3>doctor</h3><br/>\n' +
                            '\n' +
                            '     <em>Réinitialiser de mot de passe</em><br/>\n' +
                            '\n' +
                            '     <p> Nous vous informe que la réinitialiser de mot de passe a été effectué avec succès </p>';
                        mailOptions.to = result.email;
    
                        mailOptions.html = output;
                        transporter.sendMail(mailOptions, function(error, info)  {
    
                            if (error) {
    
                                res.send({"errorEmail":"errorSendingEmail"});
    
                            }
    
                            else{
    
                                res.send({"state":"succes(email sent)/PasswordUpdated"});
                            }
                            // console.log('Message sent: %s', info.messageId);
    
                            // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
                        });
    
    
    
                        // res.send({"state":"PasswordUpdated"})
    
                        // console.log('Updated');
    
                    }
    
                })
    
    
    
                //next();
    
            }
    
        })
    
    }
   





}