const mongoose=require("mongoose")

const contactSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:false,

    },
    phone:{
        type:String,
        required:false,
    },
    type:{
        type:String,
        default:"personal"
    }
})
module.exports=mongoose.model("contact",contactSchema)