const mongoose = require('mongoose');
const { model } = mongoose;
const { Schema } = mongoose;
const ObjectId = mongoose.Types.ObjectId;



const userSchema=new Schema({
    email:{ type:String, unique:true},
    password:{type:String},
    firstName:{type:String},
    lastName:{type:String}
});

const adminSchema=new Schema({
    email:{ type:String, unique:true},
    password:{type:String},
    firstName:{type:String},
    lastName:{type:String}

});


const courseSchema=new Schema({
    title:{type:String},
    description:{type:String},
    price:{type:Number},
    imageUrl:{type:String},
    creatorId:{
        type:ObjectId,
        ref:"Admin"
    }
});


const purchaseSchema=new Schema({
    userId:{
        type:ObjectId,
        ref:"User"
    },
    courseId:{
        type:ObjectId,
        ref:"Course"
    }

});


const userModel=mongoose.model("User",userSchema);
const adminModel=mongoose.model("Admin",adminSchema);
const courseModel=mongoose.model("Course",courseSchema);
const purchaseModel=mongoose.model("Purchase",purchaseSchema);

module.exports= {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};