const CV = require('../models/cvmodel');
const jwt = require("jsonwebtoken");

const multer = require("multer");
var fs = require("fs");
const upload = multer({dest:__dirname+"/uploads/images/"})

module.exports= {
    ajouterCV: function(req,res){
        var file = __dirname+"/uploads/images/"+req.file.originalname;
        fs.readFile(req.file.path, function(err,data){
            fs.writeFile(file,data,function(error){
                if(error){
                    var response = {
                        message:"sorry could not upload file",
                         filename:req.file.originalname
                    }
                }

                  else { const CV1 = new CV({
                    centreinteret:req.body.centreinteret,
                    choixphoto:req.file.originalname,
                    couleur:req.body.couleur,
                    presentation:req.body.presentation,
                    formation:req.body.formation,
                    experience:req.body.experience
                
                    
                } 
        )
        CV1.save(function(err){
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

    listCV: (req,res) =>{
        CV.find({}).populate({path :'presentation'}).populate({path:'formation'}).populate({path:'experience'}).populate({path:'competence'}).exec(function(err,list){

   
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }
        else{
                res.json(list)
            }
        }
        )
        
    },
    getbyid :(req,res)=>{
        CV.findOne({_id : req.params.id}).populate("competence").populate("presentation").populate("formation").populate("experience").exec(function(err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerCV : (req,res)=>{
        CV.findOneAndRemove({_id:req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
              res.json({state : 'ok',msg:'done'}) 
            }
        })  
      },
      UpdateCV : function(req,res){
        CV.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {
                centreinteret:req.body.centreinteret,
                choixphoto:req.body.choixphoto,
                couleur:req.body.couleur

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
        res.sendFile(__dirname+"/uploads/images/"+req.params.choixphoto)
    },
    Push : function(req,res){
        CV.updateOne({_id:req.params.id},
            {$push:{competence:req.body.competence}},{presentation:req.body.presentation},{formation:req.body.formation},
            {experience:req.body.experience},function (err){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"CV updated"})
                }
            })
    },
   





}