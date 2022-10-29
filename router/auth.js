const express=require("express")
const router=express.Router()

router.get("/",(req,res)=>{res.send("get the user login")})
router.post("/",(req,res)=>{res.send("post the user login")})


module.exports=router