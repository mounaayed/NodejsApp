const templatecv = require('../models/templatecvmodel');
const jwt = require("jsonwebtoken");

const multer = require("multer");
var fs = require("fs");
const upload = multer({dest:__dirname+"/uploads/images/"})
module.exports={
    ajoutertemplatecv: function(req,res){
        var file = __dirname+"/uploads/images/"+req.file.originalname;
        fs.readFile(req.file.path, function(err,data){
            fs.writeFile(file,data,function(error){
                if(error){
                    var response = {
                        message:"sorry could not upload file",
                         filename:req.file.originalname
                    }
                }

                  else { const templatecv1 = new templatecv({
                    nomtemplate:req.body.nomtemplate,
                    image:req.file.originalname
                   
                    
                } 
        )
        templatecv1.save(function(err){
            if (err){
                res.json({state:"no", msg:"error"+err})
            }
            else {
                res.json({state:"yes", msg:"correct"})
            }
        })}
    })
  })

},  getFile : function(req,res){
    res.sendFile(__dirname+"/uploads/images/"+req.params.image)
},
    listtemplatecv: (req,res) =>{
        templatecv.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidtemplatecv:(req,res)=>{
        templatecv.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimertemplatecv: (req,res)=>{
        templatecv.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updatetemplatecv : function(req,res){
        templatecv.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {
                nomtemplate:req.body.nomtemplate
                   
             
            },
            function(err,list){
                if (err){
                    res.json({state : 'no', msg :'error'+err})
                }else{
                    res.json({state : 'ok',msg:'done'}) 
                }
            }
    
    
        )
    }
     
    }