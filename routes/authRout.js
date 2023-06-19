import express from "express"
import {registerController,loginController,testController, getAllUser} from "../controllers/authController.js"
import {isAdmin, requireSignIn} from "../middleware/authMiddleware.js";

//route object
const router = express.Router();



// get all user - GET method
router.get('/all-user',getAllUser);


//routing
//register || method post

router.post('/register',registerController);


//LOGIN || POST
router.post("/login",loginController);

// TEST ROUTES
router.get('/test',requireSignIn,isAdmin,testController)


export default router