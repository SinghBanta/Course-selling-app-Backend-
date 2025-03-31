const userRouter = require("express").Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD}=require('../config')
// const JWT_USER_PASSWORD = "Banta@2001";

userRouter.post("/signup", async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  await userModel.create({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });
  res.json({
    "message": "Signup"
  });
});

userRouter.post("/signin", function (req, res) {
  const { email, password } = req.body;

  const user = userModel.findOne({
    email: email,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_USER_PASSWORD
    );

    res.json({
      "token": token
    });
  } else {
    res.json({
      "message": "Signin"
    });
  }
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    "message": "Purchases"
  });
});

module.exports = { userRouter };
