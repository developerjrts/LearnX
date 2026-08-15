import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export const protect = async(req, res, next) => {
    try {
        const token = req.cookies.session_code 
        if (!token) {
            return res.status(401).json({
                message: "Not authenticated."
            });
        };
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if (!user) {
            res.clearCookie("session_code");
            return res.status(401).json({
                message: "User not found"
            });
        };
        req.user = user;
        next();
    } catch (error) {
        res.clearCookie("session_code")
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong."
        })
        
    }
}
