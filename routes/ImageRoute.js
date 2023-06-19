import express from 'express'
import {createImageController,getAllImageController} from '../controllers/ImageController.js';

//router object
const router = express.Router();

// routes
// get all-blog method GET
router.get('/all-images',getAllImageController);


// method POST
// crete blogs
router.post('/create-images',createImageController);


// method PUT
// update Blog
// router.put('/update-blog/:id',updateBlogController );


// // GET 
// // single blog details
// router.get('/get-blog/:id',getBlogController);



// // method DELETE
// // delete blog
// router.delete('/delete-blog/:id',deleteBlogController);


// // GET 
// // user blog
// router.get('/user-blog/:id',userBlogController);


export default router