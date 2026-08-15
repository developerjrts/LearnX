import passport from "passport";
import {Strategy as GitHubStrategy} from "passport-github2";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import userModel from "../models/user.model.js";
import "dotenv/config"

const githubOptions = {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callBackURL: "/api/auth/github/callback",
    scope: ["user:email"]
}

const googleOptions = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
}

passport.use(new GitHubStrategy(githubOptions, async(accessToken, refreshToken, profile, done) => {
    try {
       
        const githubId = profile.id.toString();
        let user = await userModel.findOne({githubId});

        if (!user) {
            const email = profile.emails?.[0].value;
            user = await userModel.findOneAndUpdate({email}, {
                githubId,
                isVerified: true,
                avatar: profile.photos?.[0].value,
            });

        }


        if (!user) {
            user = await userModel.create({
                name: profile.displayName,
                username: profile.username,
                email: profile.emails?.[0].value,
                githubId,
                avatar: profile.photos?.[0].value,
                isVerified: true
            })
        } 

        done(null, user)

    } catch (error) {
        console.log(error);
        return done(error, null)
    }
}))

passport.use(new GoogleStrategy(googleOptions, async(accessToken, refreshToken, profile, done) => {
    try {
       
        const googleId = profile.id.toString();
        const username = profile.displayName.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "") + Math.floor(Math.random() * 10000)
        let user = await userModel.findOne({googleId});

        if (!user) {
            const email = profile.emails?.[0].value;
            user = await userModel.findOneAndUpdate({email}, {
                googleId,
                avatar: profile.photos?.[0].value,
                isVerified: true
            });

        }


        if (!user) {
            user = await userModel.create({
                name: profile.displayName,
                username: username,
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