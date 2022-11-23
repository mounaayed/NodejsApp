const question = require('../models/questionmodel')
module.exports={
    ajouterquestion: function(req,res){
        const question1 = new question(
            {
                
                libelle:req.body.libelle,
                proposition:req.body.proposition
                
                

               
            }
        )
        question1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'+err})
            }
            else{
                res.json({state:'ok',msg:'question ajouter'})
            }
        })
    },
    listequestion: (req,res) =>{
        question.find({}).populate("proposition").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
    getbyidquestion:(req,res)=>{
        question.findOne({_id : req.params.id}).populate("proposition").exec(function (err,list){
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        })
    },
    suprimerequestion: (req,res)=>{
        question.findOneAndRemove({_id:req.params.id}).populate("specialite").exec(function (err,list){
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updatequestion : function(req,res){
        question.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {            
                libelle:req.body.libelle

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
        question.updateOne({_id:req.params.id},
            {$push:{proposition:req.body.proposition}}).populate("proposition").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"question updated"})
                }
            })
    },
     Destroy: function(req, res) {
      
        question.findOneAndUpdate({_id:req.params.id},
            {$pull:{proposition:req.body.proposition}}).populate("proposition").exec(function (err,item){
                if(err){
                    res.json({state:"no",msg:"ID not found"+err})
                }else{
                    res.json({state:"ok",msg:"question deleted",data:item})
                }
            })
    }
     
    }