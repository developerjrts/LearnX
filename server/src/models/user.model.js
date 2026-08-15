import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        select: false
    },
    avatar: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    githubId: {
        type: String,
        unique: true,
        default: ""
    },
    googleId: {
        type: String,
        unique: true,
        default: ""
    },
    bio: {
        type: String,
    },
}, {timestamps: true});

const userModel = mongoose.model("User", userSchema);

export default userModel;