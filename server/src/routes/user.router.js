import express from "express";
import {protect} from "../middleware/auth.middleware.js"
import * as userController from "../controllers/user.controller.js";


const userRouter = express.Router();

userRouter.route("/").get(protect, userController.getUser)

export default userRouter