const  userRouter=require('express').Router();


userRouter.post('/user/signup',function(req,res){
    res.json({
        message:"Signup"
    })
});

userRouter.post('/user/signin',function(req,res){
    res.json({
        message:"Signin"
    })
});

userRouter.get('/user/purchases',function(req,res){
    res.json({
        message:"Purchases"
    })
});

module.exports={userRouter};