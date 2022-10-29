const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("welcome to contact keeper")
})
app.use("/api/users",require("./router/users"))
app.use("/api/auth",require("./router/auth"))
app.use("/api/contact",require("./router/contact"))


app.listen(process.env.PORT||5000,()=>{console.log("server started")})