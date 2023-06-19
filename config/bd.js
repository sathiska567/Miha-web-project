import mongoose from "mongoose"

const connectDb = async ()=>{
     try {
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected mongodb");
     }
      catch (error) {
        console.log(`Error in mongodb ${error}`);
     }
}


export default connectDb;