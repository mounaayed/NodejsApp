const candidat = require('../models/candidatmodel');
const jwt = require("jsonwebtoken");

const multer = require("multer");
var fs = require("fs");
const upload = multer({dest:__dirname+"/uploads/images/"})
module.exports={
    ajoutercandidat: function(req,res){
        var file = __dirname+"/uploads/images/"+req.file.originalname;
        fs.readFile(req.file.path, function(err,data){
            fs.writeFile(file,data,function(error){
                if(error){
                    var response = {
                        message:"sorry could not upload file",
                         filename:req.file.originalname
                    }
                }

                  else { const candidat1 = new candidat({
                    username:req.body.username,
                    password:req.body.password,
                    numtel:req.body.numtel,
                    email:req.body.email,
                    avatar: req.file.originalname,
                    nom:req.body.nom,
                    prenom:req.body.prenom,
                    sexe : req.body.sexe,
                    age: req.body.age,
                    adresse:req.body.adresse,
                    cin:req.body.cin,
                    valide:false,
                    civilite:req.body.civilite,
                    codepostale:req.body.codepostale
                    
                } 
        )
        candidat1.save(function(err,list){
            if (err){
                res.json({state:"no", msg:"error"+err})
            }
            else {
                res.json({state:"yes", msg:"condidat ajoute"+list}) 
            }

        })}
    })
  })

},
    listcandidat: (req,res) =>{
        candidat.find({}).populate("offre").exec(function(err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidcandidat:(req,res)=>{
        candidat.findOne({_id : req.params.id}).populate("offre").exec(function(err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimercandidat: (req,res)=>{
        candidat.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updatecandidat : function(req,res){
        
        candidat.update(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {
                
                numtel:req.body.numtel,
                email:req.body.email,
               
                nom:req.body.nom,
                prenom:req.body.prenom,
                sexe : req.body.sexe,
                age: req.body.age,
                adresse:req.body.adresse,
                cin:req.body.cin,
                civilite:req.body.civilite,
                codepostale:req.body.codepostale
            },            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done',data:list}) 
                }
            }
    
    
        )
    },
    Push : function(req,res){
        candidat.findOneAndUpdate({_id:req.params.id},
            {$push:{offre:req.body.offre}}).populate("offre").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"candidat updated",data:item})
                }
            })
    },
    Destroy: function(req, res) {
      
        candidat.findOneAndUpdate({_id:req.params.id},
            {$pull:{offre:req.body.offre}}).populate("offre").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"offre deleted",data:item})
                }
            })
    }
     
    }


