import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateToken from "../config/jwt.token.js"

export const googleAuthentication = async(req, res) => {
    const session_code = await generateToken(req.user._id)
    res.cookie("session_code", session_code, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.redirect(`${process.env.CLIENT_URL}/dashboard`)
    
}
   
export const githubAuthentication = async(req, res) => {
    const session_code = await generateToken(req.user._id)
    res.cookie("session_code", session_code, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.redirect(`${process.env.CLIENT_URL}/dashboard`)
    
}

export const signUp = async(req, res) => {
    try {
        const {name, username, email, password} = req.body;

        if (!name || !username || !email || !password) {
           return res.status(401).json({
                status: false,
                message: "All fields are required"
            })
        }

        const usernameExists = await userModel.findOne({username});
        const emailExists = await userModel.findOne({email});

        if (usernameExists) {
           return res.status(400).json({
                message:"username already taken."
            }); 
        }
        if (emailExists) {
           return res.status(400).json({
                message:"email already taken."
            }); 
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name,
            username,
            email,
            password: hashedPassword
        });

        
        const session_code = await generateToken(newUser._id)
        res.cookie("session_code", session_code, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        
        
        res.status(201).json({
            message: "User created.",
            session_code
        })

    } catch (error) {
        console.log(error);
        
    }
}

export const signIn = async(req, res) => {
    try {
          const {username, password} = req.body;

        if (!username || !password) {
           return res.status(401).json({
                status: false,
                message: "All fields are required"
            })
        }

        const user = await userModel.findOne({username}).select("+password");

        if (!user) {
           return res.status(400).json({
                message:"Invalid username."
            }); 
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            return res.status(400).json({
                message: "Invalid credentials."
            })
        }
        
        const session_code = await generateToken(user._id)
        res.cookie("session_code", session_code, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        
        
        res.status(201).json({
            message: "Signed In.",
            session_code
        })
    } catch (error) {
        console.log(error);
        
    }
}