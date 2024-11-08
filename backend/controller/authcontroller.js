import User from '../models/db.js'
import bcryptjs from 'bcryptjs';
import { errorhandler } from '../utils/error.js';

export const signup = async (req, res,next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = bcryptjs.hashSync(password, 10);
    console.log(hashedpassword)
    const newUser = new User({ username, email, password:hashedpassword });
    try {
        await newUser.save();
        res.status(201).json({
            msg: "user is created succesfully"
        })
    } catch (err) {
        next(err); 
    }
};