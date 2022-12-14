const express = require("express");
const connectDB = require("./config/db");
const cors=require("cors")
const app = express();
const path=require("path");
const { maxHeaderSize } = require("http");
app.use(cors())
connectDB();
app.use(express.json({ extended: false }));
// app.get("/", (req, res) => {
//   res.send("welcome to contact keeper");
// });
app.use("/api/users", require("./router/users"));
app.use("/api/auth", require("./router/auth"));
app.use("/api/contact", require("./router/contact"));
//serve static assent in production
if(process.env.NODE_ENV==="production"){
  //
  app.use(express.static("client/build"))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
  })
}
app.listen(process.env.PORT || 5000, () => {
  console.log("server started");
});