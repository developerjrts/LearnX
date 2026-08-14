import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/router.js";
import connectDB from "./config/db.js"
import passport from "./config/passport.js"

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(cookieParser());
app.use("/api", router)
app.use(passport.initialize())
app.use((req, res, next) => {
    res.status(404).json({
        message: "Router not found",
        route: req.originalUrl
    })
})


connectDB().then(() => {
    app.listen(port, () => {
    console.log(`Server is running in port: ${port}`); 
})
})