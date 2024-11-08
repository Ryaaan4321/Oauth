import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userroute from './routes/userroute.js'
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

