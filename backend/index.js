import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("hmlo hmlo from db")
})
const app=express();;
app.listen(3000,()=>{
    console.log("pols aa gyi")
})

