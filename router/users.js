const express = require("express");
const router = express.Router();
const bcrypt=require("bcryptjs")
const {check,validationResult}=require("express-validator/check");
const User = require("../models/User");
router.post("/", [
   check("name","enter the valid name").isLength({min:3}),
   check("email","enter the valid mail id").isEmail(),
   check("password","Enter the valid password").isLength({min:5})

],async(req, res) => {
  const error=validationResult(req)
  if(!error.isEmpty()){
    return res.status(400).json({errors:error.array()})
  }
  let {name,email,password}=req.body
  try {
    let user=await User.findOne({email})
    if(user){
      return res.status(400).json({msg:"user already exists"})
    }
    user=new User({name,email,password})
    let salt=await bcrypt.genSalt(10)
    user.password=await bcrypt.hash(password,salt)
    await user.save()
    res.send("user saved successfully")
  } catch (error) {
    console.log(error.message)
    res.status(500).send("server error")
  }
});

module.exports = router;
