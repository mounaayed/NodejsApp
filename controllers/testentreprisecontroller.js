const testentreprise = require('../models/testentreprisemodel')
module.exports={
    ajoutertestentreprise: function(req,res){
        const testentreprise1 = new testentreprise(
            {
                titre:req.body.titre,
                dateajout:req.body.dateajout,
                duree:req.body.duree,
                identreprise:req.body.identreprise,
                question:req.body.question
                
    
               
            }
        )
        testentreprise1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'testentreprise ajouter'})
            }
        })
    },
    listtestentreprise: (req,res) =>{
        testentreprise.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidtestentreprise:(req,res)=>{
        testentreprise.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimertestentreprise: (req,res)=>{
        testentreprise.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Push : function(req,res){
        testentreprise.updateOne({_id:req.params.id},
            {$push:{question:req.body.question}},function (err){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"testentreprise updated"})
                }
            })
    }
}