const entreprise = require('../models/entreprisemodel')
const multer = require("multer");
var fs = require("fs");
const jwt = require("jsonwebtoken");
const upload = multer({dest:__dirname+"/uploads/images/"})
module.exports={
    ajouterentreprise: function(req,res){
        var file = __dirname+"/uploads/images/"+req.file.originalname;
        fs.readFile(req.file.path, function(err,data){
            fs.writeFile(file,data,function(error){
                if(error){
                    var response = {
                        message:"sorry could not upload file",
                         filename:req.file.originalname
                    }
                }

                  else { const entreprise1 = new entreprise({
                    username:req.body.username,
                password:req.body.password,
                numtel:req.body.numtel,
                email:req.body.email,
                avatar: req.file.originalname ,
                nomentreprise:req.body.nomentreprise,
                matriculefiscale:req.body.matriculefiscale,
                localisation:req.body.localisation,
                secteuractivite:req.body.secteuractivite,
                anneefondation:req.body.anneefondation,
                description:req.body.description,
                codepostale:req.body.codepostale,
                valide:false
                
                    
                } 
        )
        entreprise1.save(function(err){
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
    listentreprise: (req,res) =>{
        entreprise.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidentreprise:(req,res)=>{
        entreprise.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerentreprise: (req,res)=>{
        entreprise.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    UpdateEntreprise : function(req,res){
        entreprise.findOneAndUpdate(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {
                
                numtel:req.body.numtel,
                email:req.body.email,
                nomentreprise:req.body.nomentreprise,
                matriculefiscale:req.body.matriculefiscale,
                localisation:req.body.localisation,
                secteuractivite:req.body.secteuractivite,
                anneefondation:req.body.anneefondation,
                description:req.body.description,
                codepostale:req.body.codepostale
            },
            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done',data:list}) 
                }
            }
    
    
        )
    },
    getFile : function(req,res){
        res.sendFile(__dirname+"/uploads/images/"+req.params.avatar)
    }
     
    }