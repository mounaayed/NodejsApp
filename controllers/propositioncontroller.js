const proposition = require('../models/propositionmodel')
module.exports={
    ajouterproposition: function(req,res){
        const proposition1 = new proposition(
            {
                
                ennonce:req.body.ennonce,
                etat:req.body.etat
                
                

               
            }
        )
        proposition1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'+err})
            }
            else{
                res.json({state:'ok',msg:'proposition ajouter'})
            }
        })
    },
    listeproposition: (req,res) =>{
        proposition.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidproposition:(req,res)=>{
        proposition.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimereproposition: (req,res)=>{
        proposition.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updateproposition : function(req,res){
        proposition.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {            
                ennonce:req.body.ennonce,
                etat:req.body.etat

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