const formation = require('../models/formationmodel')
module.exports={
    ajouterformation: function(req,res){
        const formation1 = new formation(
            {
                datedebut:req.body.datedebut,
                datefin:req.body.datefin,
                villepaye:req.body.villepaye,
                diplome: req.body.diplome,
                etablissement:req.body.etablissement
               
    
               
            }
        )
        formation1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'formation ajouter'})
            }
        })
    },
    listformation: (req,res) =>{
        formation.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidformation:(req,res)=>{
        formation.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerformation: (req,res)=>{
        formation.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updateformation : function(req,res){
        formation.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                
                datedebut:req.body.datedebut,
                datefin:req.body.datefin,
                villepaye:req.body.villepaye,
                diplome: req.body.diplome,
                etablissement:req.body.etablissement
               
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