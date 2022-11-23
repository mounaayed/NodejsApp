const presentation = require('../models/presentationmodel')
module.exports={
    ajouterpresentation: function(req,res){
        const presentation1 = new presentation(
            {
                nom:req.body.nom,
                prenom:req.body.prenom,
                adresse:req.body.adresse,
                numtel: req.body.numtel,
                email:req.body.email,
                permisdeconduite:req.body.permisdeconduite,
                postecherche:req.body.postecherche
            
        

               
            }
        )
        presentation1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'presentation ajouter'})
            }
        })
    },
    listpresentation: (req,res) =>{
        presentation.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidpresentation:(req,res)=>{
        presentation.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerpresentation: (req,res)=>{
        presentation.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updatepresentation : function(req,res){
        presentation.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   nom:req.body.nom,
                prenom:req.body.prenom,
                adresse:req.body.adresse,
                numtel: req.body.numtel,
                email:req.body.email,
                permisdeconduite:req.body.permisdeconduite,
                postecherche:req.body.postecherche
            
               
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