import express from 'express'
import {createBlogController,getAllBlogController} from '../controllers/blogController.js';

//router object
const router = express.Router();

// routes
// get all-blog method GET
router.get('/all-blog',getAllBlogController);


// method POST
// crete blogs
router.post('/create-blog',createBlogController);


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