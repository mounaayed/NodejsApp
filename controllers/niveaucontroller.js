const niveau = require('../models/niveaumodel')
    module.exports={
    ajouterniveau: function(req,res){
        const niveau1 = new niveau(
            {
                score:req.body.score,
                dureéprise:req.body.dureéprise,
                etat:req.body.etat
                
               
            }
        )
        niveau1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'niveau ajouter'})
            }
        })
    },
    listniveau: (req,res) =>{
        niveau.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidniveau:(req,res)=>{
        niveau.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerniveau: (req,res)=>{
        niveau.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
   
     
    }