const express = require("express");
const jwt = require("jsonwebtoken");
const adminRouter = express.Router();
const { adminModel, courseModel } = require("../db");
const { JWT_ADMIN_PASSWORD } = require("../config");
const {adminMiddleware}=require('../middleware/admin')



adminRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  await adminModel.create({
    email,
    password,
    firstName,
    lastName,
  });

  res.json({
    message: "Signup successful",
  });
});

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  const admin = await adminModel.findOne({
    email: email,
    password: password,
  });

  if (admin) {
    const token = jwt.sign(
      {
        id: admin._id,
      },
      JWT_ADMIN_PASSWORD
    );

    res.json({
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Invalid email or password",
    });
  }
});

adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;

  const { title, description, imageUrl, price } = req.body;

  const course = await courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId,
  });
  res.json({
    message: "course created",
    courseId: course._id,
  });
});

adminRouter.put("/course",adminMiddleware, async function (req, res) {
  const adminId = req.userId;
   

  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId:adminId
    },
    { title: title, description: description, imageUrl: imageUrl, price: price }//what to update
  );
  res.json({
    message: "update course successfully1",
    courseId: course._id,
  });
});

adminRouter.get("/course/bulk", adminMiddleware,async function (req, res) {
    const adminId=req.userId;
    const courses = await courseModel.find(
        {
          creatorId:adminId
        })
      res.json({
        message: "see all courses",
        courses
      });
    });
    


module.exports = { adminRouter };
