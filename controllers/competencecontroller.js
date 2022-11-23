const competence = require('../models/competencemodel')
module.exports={
    ajoutercompetence: function(req,res){
        const competence1 = new competence(
            {
                nomcompetence:req.body.nomcompetence,
                
    
               
            }
        )
        competence1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'competence ajouter'+list})
            }
        })
    },
    listcompetence: (req,res) =>{
        competence.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidcompetence:(req,res)=>{
        competence.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimercompetence: (req,res)=>{
        competence.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Push : function(req,res){
        competence.updateOne({_id:req.params.id},
            {$push:{niveau:req.body.niveau}},function (err){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"competence updated"})
                }
            })
    },
    Updatecompetence: function(req,res){
        competence.findOneAndUpdate(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {     nomcompetence:req.body.nomcompetence,
                
            
               
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