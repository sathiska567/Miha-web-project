import { hashPassword,comparePassword} from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// REGISTER POST

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body

        //validation
        if (!name) {
            return res.send({ message: 'name is require' })
        }

        if (!email) {
            return res.send({ message: 'email is require' })
        }
        if (!password) {
            return res.send({ message: 'password is require' })
        }
        if (!phone) {
            return res.send({ message: 'phone is require' })
        }
    

        //check user
        const existingUser = await userModel.findOne({email})

        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'already register please login',

            })
        }


        //register user
const hashedPassword = await hashPassword(password);

        //save
        const user = await new userModel({ 

            name, 
            email, 
            password: hashedPassword,
            phone, 
     
        
        }).save();

        res.status(201).send({
            success: true,
            message: 'User register successfull',
            user,
        });

    }

    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error registration",
            error
        })
    }
}


// get all users
export const getAllUser = async (req,res) =>{
    try {

        const users = await userModel.find({})
        res.status(200).send({
            userCount:users.length,
            success:true,
            message:'All users data',
            users
        });
     
    } 
    
    catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error In get all users',
            error
        })
    }
}




// POST LOGIN
export const loginController = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:"invalide email or password"
            })
        }

        //check user 
    const user = await userModel.findOne({email})

            if(!user){
                return res.status(404).send({
                    success:false,
                    message:"Email is not matching"
                })
            }

    const match = await comparePassword(password,user.password)

            if(!match){
             return res.status(200).send({
                success:false,
                message:"Invalid password"
             })
            }

    // Token
    const token = await jwt.sign({_id:user._id},process.env.JWT_SECRETE,{
        expiresIn:"7d"
    });

    res.status(200).send({
        success:true,
        message:"Login successfull",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
          
        },
        token,
    });

    } 
    
    catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error mchn login",
            error

        })
    }
}

// testController
export const testController = (req,res)=>{
    res.send("Protected Routes");
}