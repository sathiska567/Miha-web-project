import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true
    }

},{timestamps:true});


export default mongoose.model("Image",imageSchema)