import express from "express";
import * as authController from "../controllers/auth.controller.js"
import passport from "passport"
const authRouter = express.Router();


// Manula Sing Up/In
authRouter.route("/sign-up").post(authController.signUp);
authRouter.route("/sign-in").post(authController.signIn);

// Github Sign Up/In
authRouter.route("/github").get(passport.authenticate("github", {
    scope: ["user:email"]
}))
authRouter.route("/github/callback").get(passport.authenticate("github", {
    session: false,
    failureRedirect: `${process.env.CLIENT_URL}/auth/sign-in`
}), authController.githubAuthentication)


// Google Sign Up/In
authRouter.route("/google").get(passport.authenticate("google", {
    scope: ["profile", "email"]
}))
authRouter.route("/google/callback").get(passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.CLIENT_URL}/auth/sign-in`
}), authController.googleAuthentication)


export default authRouter;