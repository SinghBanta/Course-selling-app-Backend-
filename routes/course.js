const courseRouter=require('express').Router();

courseRouter.post('/purchases',function(req,res){
    res.json({
        message:"Purchases"
    })
})

courseRouter.get('/preview',function(req,res){
    res.json({
        message:"Preview"
    })
})


module.exports={courseRouter}