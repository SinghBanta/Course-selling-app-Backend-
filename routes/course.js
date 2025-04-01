const { purchaseModel,courseModel} = require('../db');
const { userMiddleware } = require('../middleware/user');

const courseRouter=require('express').Router();

courseRouter.post('/purchases',userMiddleware,async function(req,res){
    const userId=req.userId;
    const courseId=req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message:"You have successfully bought the course"
    })
})

courseRouter.get('/preview',async function(req,res){
    const course=await courseModel.find({}) 
    res.json({
        course
    })
})


module.exports={courseRouter}