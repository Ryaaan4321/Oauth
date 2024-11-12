import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userroute from './routes/userroute.js'
import authroute from './routes/authroute.js'
import cookieParser from 'cookie-parser'
import path from 'path'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("hmlo hmlo from db")
})

const __dirname = path.resolve()
const app = express()
app.use(express.static(path.join(__dirname, '/frontend/dist')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
});

app.use(cookieParser())
const PORT=process.env.PORT||4000
app.listen(3000, () => {
    console.log("pols aa gyi")
})

app.use(express.json())
app.use('/backend/user', userroute);
app.use('/backend/auth', authroute);



app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statuscode).json({
        success: false,
        message,
        statuscode
    });
})

