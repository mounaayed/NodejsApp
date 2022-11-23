const domaine = require('../models/domainemodel')
module.exports={
    ajouterdomaine: function(req,res){
        const domaine1 = new domaine(
            {
                nomdomaine:req.body.nomdomaine,
                specialite:req.body.specialite
    
               
            }
        )
        domaine1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'domaine ajouter'})
            }
        })
    },
    listdomaine: (req,res) =>{
        domaine.find({}).populate("specialite").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyiddomaine:(req,res)=>{
        domaine.findOne({_id : req.params.id}).populate("specialite").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerdomaine: (req,res)=>{
        domaine.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updatedomaine : function(req,res){
        domaine.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                nomdomaine:req.body.nomdomaine
            
               
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
        domaine.findOneAndUpdate({_id:req.params.id},
            {$push:{specialite:req.body.specialite}}).populate("specialite").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"domaine updated",data:item})
                }
            })
    },
    Destroy: function(req, res) {
      
        domaine.findOneAndUpdate({_id:req.params.id},
            {$pull:{specialite:req.body.specialite}}).populate("specialite").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"specilite deleted",data:item})
                }
            })
    }
}