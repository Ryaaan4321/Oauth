import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userroute from './routes/userroute.js'
import authroute from './routes/authroute.js'
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("hmlo hmlo from db")
})
const app = express();;
app.listen(3000, () => {
    console.log("pols aa gyi")
})
app.use(express.json())
app.use('/backend/user', userroute);
app.use('/backend/auth',authroute);
app.use(cookieParser());

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode||500;
    const message=err.message || 'Internal server error';
    return res.status(statuscode).json({
        success:false,
        message,
        statuscode
    });
})

