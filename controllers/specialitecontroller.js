const specialite = require('../models/specialitemodel')
module.exports={
    ajouterspecialite: function(req,res){
        const specialite1 = new specialite(
            {
                nomspecialite:req.body.nomspecialite,
                competence:req.body.competence
    
               
            }
        )
        specialite1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'specialite ajouter'})
            }
        })
    },
    listspecialite: (req,res) =>{
        specialite.find({}).populate("competence").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidspecialite:(req,res)=>{
        specialite.findOne({_id : req.params.id}).populate("competence").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerspecialite: (req,res)=>{
        specialite.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Push : function(req,res){
        specialite.findOneAndUpdate({_id:req.params.id},
            {$push:{competence:req.body.competence}}).populate("competence").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"specialite updated",data:item})
                }
            })
    },
    Updatespecialite : function(req,res){
        specialite.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {  nomspecialite:req.body.nomspecialite,
                competence:req.body.competence
            
               
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
    Destroy: function(req, res) {
      
        specialite.findOneAndUpdate({_id:req.params.id},
            {$pull:{competence:req.body.competence}}).populate("competence").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"competence deleted",data:item})
                }
            })
    }
}