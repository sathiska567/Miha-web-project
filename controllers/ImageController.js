import mongoose from 'mongoose'
import ImageModel from '../models/ImageDetails.js'

// GET all images
export const getAllImageController = async (req, res) => {
  try {
    const images = await ImageModel.find({});

    if (!images) {
      return res.status(200).send({
        success: false,
        message: "No images found",
      });
    }

    return res.status(200).send({
      success: true,
      imageCount: images.length,
      message: "All image list",
      images,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while getting images",
    });
  }
};

// create image
export const createImageController = async (req, res) => {
  try {
    const { image } = req.body;

    // validation
    if (!image) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    const newImage = await new ImageModel({
      image,
    }).save();

    return res.status(201).send({
      success: true,
      message: "Image created",
      newImage,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while creating image",
      error,
    });
  }
};



// update blog
// export const updateBlogController = async (req,res)=>{
//   try {

//     const {id} = req.params
//     const {title,description,image} = req.body
//     const blog = await blogModel.findByIdAndUpdate(id,{...req.body},{new:true})

//     return res.status(200).send({
//        success:true,
//        message:'Blog Updated',
//        blog,
//     })
    
//   }
  
//   catch (error) {
//     console.log(error);
//     return res.status(400).send({
//       success:false,
//       message:"Error while updating blog",
//       error
//     })
//   }
// } 

// single blog
// export const getBlogController = async (req,res) =>{
//   try {
  
//     const {id} = req.params
//     const blog = await blogModel.findById(id);

//     if(!blog){
//         return res.status(404).send({
//           success:false,
//           message:"Blog not found with this id"
//         })
//     }

//     return res.status(200).send({
//       success:true,
//       message:"fetch single blog",
//       blog
//     })
    
//   } 
  
//   catch (error) {
//     console.log(error);
//     return res.status(400).send({
//       success:false,
//       message:"Error while getting single blog",
//       error
//     })
    
//   }
// }


// // delete blog
// export const deleteBlogController = async (req,res)=>{

//   try {

//   const blog =   await blogModel.findByIdAndDelete(req.params.id).populate("user")

//      await blog.user.blogs.pull(blog);
//      await blog.user.save();

//     res.status(200).send({

//       success:true,
//       message:"Blog Deleted !"

//     })
    
//   }
  
//   catch (error) {
//     console.log(error);

//     return res.status(400).send({
//        success:false,
//        message:"Error while delete blog"
//     })
    
//   }

// }

// // get user blog

// export const userBlogController = async (req,res)=>{
//    try {


//     const userBlog = await userModel.findById(req.params.id).populate("blogs")

//     if(!userBlog){
//        return res.status(404).send({
//          success:false,
//          message:"blogs not found this id"
//        })
//     }

//     return res.status(200).send({
//        success:true,
//        message:"User blogs",
//        userBlog
//     })
    
//    }
   
//    catch (error) {
//     console.log(error);
//     return res.status(400).send({
//       success:false,
//       message:"Error in user blog",
//       error
    
//     })
//    }
// }
