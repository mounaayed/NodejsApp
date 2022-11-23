const competencerequis = require('../models/competencesrequismodel')
module.exports={
    ajoutercompetencerequis: function(req,res){
        const competencerequis1 = new competencerequis(
            {
                nomcompetence:req.body.nomcompetence,
                niveau:req.body.niveau
    
               
            }
        )
        competencerequis1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'competencerequis ajouter'})
            }
        })
    },
    listcompetencerequis: (req,res) =>{
        competencerequis.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidcompetencerequis:(req,res)=>{
        competencerequis.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimercompetencerequis: (req,res)=>{
        competencerequis.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updatecompetencerequis : function(req,res){
        competencerequis.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                nomcompetence:req.body.nomcompetence,
                niveau:req.body.niveau
    
            
               
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