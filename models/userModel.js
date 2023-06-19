import mongoose from "mongoose";

const userShema = new mongoose.Schema({
     name:{
        type:String,
        require:true,
        trim:true
     },

     email:{
        type:String,
        require:true,
        unique:true
     },

     password:{
        type:String,
        require:true
     },

     phone:{
        type:String,
        require:true
     },

     blogs:[{
       type:mongoose.Types.ObjectId,
       ref:'Blog',
     }]

},{timestamps:true});

export default mongoose.model("users",userShema)