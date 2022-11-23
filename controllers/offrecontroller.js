const offre = require('../models/offremodel')
module.exports={
    ajouteroffre: function(req,res){
        const offre1 = new offre(
            {
                
                titreposte:req.body.titreposte,
                description:req.body.description,
                typecontrat:req.body.typecontrat,
                experienceexige:req.body.experienceexige,
                niveauetudeexige:req.body.niveauetudeexige,
                datedebutpublication:req.body.datedebutpublication,
                datefinpublication:req.body.datefinpublication,
                entreprise:req.body.entreprise
                

                
                

               
            }
        )
        offre1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'+err})
            }
            else{
                res.json({state:'ok',msg:'offre ajouter'})
            }
        })
    },
    listeoffre: (req,res) =>{
        offre.find({}).populate("entreprise").populate("competence").exec(function(err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidoffre:(req,res)=>{
        offre.findOne({_id : req.params.id}).populate("entreprise").populate("competence").exec(function(err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimereoffre: (req,res)=>{
        offre.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updateoffre : function(req,res){
        offre.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {            
                titreposte:req.body.titreposte,
                description:req.body.description,
                typecontrat:req.body.typecontrat,
                experienceexigé:req.body.experienceexigé,
                niveauétudeéxigé:req.body.niveauétudeéxigé,
                datedebutpublication:req.body.datedebutpublication,
                datefinpublication:req.body.datefinpublication

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
    Push : function(req,res){
        offre.updateOne({_id:req.params.id},
            {$push:{entreprise:req.body.entreprise}},function (err){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"offre updated"})
                }
            })
    },
    Push1 : function(req,res){
        offre.updateOne({_id:req.params.id},
            {$push:{competence:req.body.competence}},function (err){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"offre updated"})
                }
            })
    },
}