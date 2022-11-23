const experinece = require('../models/expériencepromodel')
module.exports={
    ajouterexperinece: function(req,res){
        const experinece1 = new experinece(
            {
                datedebut:req.body.datedebut,
                datefin:req.body.datefin,
                villepaye:req.body.villepaye,
                 nomsociete:req.body.nomsociete,
                 posteocupe:req.body.posteocupe,
                 tacherealise:req.body.tacherealise
        

               
            
             } )
        experinece1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'experinece ajouter'})
            }
        })
    },
    listexperinece: (req,res) =>{
        experinece.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidexperinece:(req,res)=>{
        experinece.findOne({_id : req.params.id},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerexperinece: (req,res)=>{
        experinece.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updateexperinece : function(req,res){
        experinece.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {   
                
            
               
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