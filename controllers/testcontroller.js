const test = require('../models/testmodel')
module.exports={
    ajoutertest: function(req,res){
        const test1 = new test(
            {
                titre:req.body.titre,
                dateajout:req.body.dateajout,
                duree:req.body.duree,
                niveau:req.body.niveau,
                comptence:req.body.comptence,
                question:req.body.question
                
    
               
            }
        )
        test1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'test ajouter'})
            }
        })
    },
    listtest: (req,res) =>{
        test.find({}).populate("question").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    recherchbycomptence: function(req,res) {
        test.find({comptence:req.params.comptence}).populate("question").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidtest:(req,res)=>{
        test.findOne({_id : req.params.id}).populate("question").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimertest: (req,res)=>{
        test.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Push : function(req,res){
        test.updateOne({_id:req.params.id},
            {$push:{question:req.body.question}}).populate("question").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"test updated",data:item})
                }
            })
    },
    Updatetest: function(req,res){
        test.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {    titre:req.body.titre,
                dateajout:req.body.dateajout,
                duree:req.body.duree,
                niveau:req.body.niveau,
                comptence:req.body.comptence,
                question:req.body.question
            
               
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
      
        test.findOneAndUpdate({_id:req.params.id},
            {$pull:{question:req.body.question}}).populate("question").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"test deleted",data:item})
                }
            })
    }
}