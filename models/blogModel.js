import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    }

},{timestamps:true});


export default mongoose.model("Blog",blogSchema)