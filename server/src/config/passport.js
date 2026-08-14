import passport from "passport";
import {Strategy as GitHubStrategy} from "passport-github2";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import userModel from "../models/user.model.js";

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callBackURL: "/api/auth/github/callback",
    scope: ["user:email"]
}, async(accessToken, refreshToken, profile, done) => {
    try {
       
        const githubId = profile.id.toString();
        let user = await userModel.findOne({githubId});

        if (!user) {
            const email = profile.emails?.[0].value;
            user = await userModel.findOneAndUpdate({email}, {
                githubId    
            });

        }


        if (!user) {
            user = await userModel.create({
                name: profile.displayName,
                username: profile.username,
                email: profile.emails?.[0].value,
                githubId,
                avatar: profile.photos?.[0].value,
                provider: "github",
                isVerified: true
            })
        } 

        done(null, user)

    } catch (error) {
        console.log(error);
        return done(error, null)
    }
}))

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.Google_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
}, async(accessToken, refreshToken, profile, done) => {
    try {
       
        const googleId = profile.id.toString();
        let user = await userModel.findOne({googleId});

        if (!user) {
            const email = profile.emails?.[0].value;
            user = await userModel.findOneAndUpdate({email}, {
                googleId
            }, {
                new: true
            });

        }


        if (!user) {
            user = await userModel.create({
                name: profile.displayName,
                username: profile.username,
                email: profile.emails?.[0].value,
                googleId,
                avatar: profile.photos?.[0].value,
                provider: "google",
                isVerified: true
            })
        } 

        done(null, user)

    } catch (error) {
        console.log(error);
        return done(error, null)
    }
}))

export default passport