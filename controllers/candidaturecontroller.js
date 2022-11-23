const  candidature = require('../models/candidaturemodel')
    module.exports={
    ajoutercandidature: function(req,res){
        const candidature1 = new candidature(
            {
                etats:req.body.etats,
                dateenvoicandidature:req.body.dateenvoicandidature
               
            }
        )
        candidature1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'candidature ajouter'})
            }
        })
    },
    listcandidature: (req,res) =>{
        candidature.find({}).populate("candidat").exec(function(err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidcandidature:(req,res)=>{
        candidature.findOne({_id : req.params.id}).populate("candidat").exec(function(err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimercandidature: (req,res)=>{
        candidature.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Push : function(req,res){
        candidature.updateOne({_id:req.params.id},
            {$push:{candidat:req.body.candidat}},function (err){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"candidature updated"})
                }
            })
    },
     
    }