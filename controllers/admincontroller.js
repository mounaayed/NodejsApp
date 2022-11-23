const admin = require('../models/adminmodel')
module.exports={
    ajouteradmin: function(req,res){
        const admin1 = new admin(
            {   privilége:req.body.privilége,
                username:req.body.username,
                password:req.body.password,
                numtel:req.body.numtel,
                email:req.body.email,
                avatar: req.body.avatar
                

               
            }
        )
        admin1.save(function(err){
            if(err){
                res.json({state:'no',msg:'vous avez un erreur'})
            }
            else{
                res.json({state:'ok',msg:'admin ajouter'+list})
            }
        })
    },
    affichieradmin: (req,res) =>{
        admin.find({},(err,list)=>{
            if(err){
                res.json({state : 'no', msg :'error'+err})
            }else{
                res.json(list)
            }
        }
        )
        
    },
   
    suprimeradmin: (req,res)=>{
        admin.findOneAndRemove({_id:req.params.id},(err,list)=>{
          if(err){
              res.json({state : 'no', msg :'error'+err})
          }else{
            res.json({state : 'ok',msg:'done'}) 
          }
      })  
    },
    Updateadmin : function(req,res){
        admin.updateOne(
            {
                _id : req.params.id
            },{
                $set : req.body
            },
            {    privilége:req.body.privilége,
                username:req.body.username,
                password:req.body.password,
                numtel:req.body.numtel,
                email:req.body.email,
                avatar: req.body.avatar
                
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