const adminRouter=require('express').Router();

adminRouter.post('/signin',function(req,res){
    res.json({
        message:"signin"
    })
});


adminRouter.post('/signup',function(req,res){
    res.json({
        message:"signup"
    })
});


adminRouter.post('/',function(req,res){
    res.json({
        message:"add new courses"
    })
});



adminRouter.put('/',function(req,res){
    res.json({
        message:"update courses"
    })
});


adminRouter.get('/bulk',function(req,res){
    res.json({
        message:"see all courses"
    })
});

module.exports={ adminRouter };