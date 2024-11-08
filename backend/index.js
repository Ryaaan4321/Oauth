import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userroute from './routes/userroute.js'
import authroute from './routes/authroute.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("hmlo hmlo from db")
})
const app = express();;
app.listen(3000, () => {
    console.log("pols aa gyi")
})
app.use(express.json())
app.use('/backend/userroute', userroute);
app.use('/backend/auth',authroute);

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode||500;
    const message=err.message || 'Internal server error';
    return res.status(statuscode).json({
        success:false,
        message,
        statuscode
    });
})

